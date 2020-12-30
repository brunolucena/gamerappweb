import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { SizeMe } from 'react-sizeme';
import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getProportions } from 'Helpers/functions';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxStore } from 'Store/Redux';
import { loadBanners } from 'Modules/Loja/Store/Ducks/Banner';
import { Link } from 'react-router-dom';

export interface Item {
  imageUrl: string;
  sessionId: string;
  storeProductId?: string;
}

interface Props {
  sessionId?: string;
  insideArrows?: boolean;
  itemWidth?: number;
  items?: Item[];
  itemsOnScreen?: number;
}

const ContentSlider: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { insideArrows, items, sessionId, itemsOnScreen = 1 } = props;
  const [itemWidth, setItemWidth] = useState(props.itemWidth);
  const [slideToShow, setSlideToShow] = useState(itemsOnScreen);
  const storeBanners = useSelector((state: ReduxStore) => state.storeBanners);

  const arrowLeft = (
    <div className='arrow-container arrow-left-container'>
      <ArrowLeft style={{ color: insideArrows ? '#ffffff' : '#099a35', fontSize: 70, opacity: insideArrows ? 0.75 : 1 }} />
    </div>
  );

  const arrowRight = (
    <div className='arrow-container arrow-right-container'>
      <ArrowRight style={{ color: insideArrows ? '#ffffff' : '#099a35', fontSize: 70, opacity: insideArrows ? 0.75 : 1 }} />
    </div>
  );

  useEffect(() => {
    if (!items && sessionId) {
      dispatch(loadBanners({ sessionId }));
    }
  }, [dispatch, items, sessionId]);

  useEffect(() => {
    const container = document.getElementById('content-slider-container');

    if (container && itemWidth) {
      const itemsToShow = Math.ceil(container.offsetWidth / (itemWidth + 100));

      setSlideToShow(itemsToShow);
    }
  }, [setSlideToShow, itemWidth]);

  return (
    <div className={`content-slider-container ${insideArrows ? 'inside-arrows' : ''}`} id='content-slider-container'>
      <SizeMe>
        {({ size }) => {
          const proportions = getProportions({ width: size.width ?? 1000 }, '2x1');

          if (!props.itemWidth) {
            setItemWidth(proportions.width);
          }

          const arrayBanner = items ?? storeBanners.banners.filter((banner) => banner.sessionId === sessionId);

          const sliderItems = arrayBanner.map((item) => {
            const element = (
              <div
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'none',
                  backgroundSize: 'cover',
                  borderRadius: 20,
                  height: proportions.height,
                  width: proportions.width,
                }}
              />
            );
            return item.storeProductId || item.sessionId ? (
              <Link to={item.storeProductId ? `/produto/${item.storeProductId}` : `/produtos/${item.sessionId}`}>{element}</Link>
            ) : (
              element
            );
          });

          if (sliderItems.length < slideToShow) {
            while (sliderItems.length < slideToShow) {
              sliderItems.push(<div />);
            }
          }

          return (
            <div style={{ position: 'relative', height: proportions.height ?? '' }}>
              <div style={{ position: 'absolute', width: '100%' }}>
                <Slider
                  autoplay
                  autoplaySpeed={3000}
                  centerPadding='0'
                  dots
                  focusOnSelect={false}
                  infinite={true}
                  initialSlide={0}
                  nextArrow={arrowRight}
                  prevArrow={arrowLeft}
                  speed={500}
                  slidesToShow={slideToShow}
                  slidesToScroll={1}
                  swipeToSlide
                >
                  {sliderItems.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </Slider>
              </div>
            </div>
          );
        }}
      </SizeMe>
    </div>
  );
};

export default ContentSlider;