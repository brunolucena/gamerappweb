import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { SizeMe } from 'react-sizeme';
import './styles.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getProportions } from 'Helpers/functions';

export interface Item {
  id: string;
  url: string;
}

interface Props {
  items: Item[];
  itemWidth?: number;
  itemsOnScreen?: number;
}

const ContentSlider: React.FC<Props> = (props) => {
  const { items, itemsOnScreen = 1 } = props;

  const [itemWidth, setItemWidth] = useState(props.itemWidth);
  const [slideToShow, setSlideToShow] = useState(itemsOnScreen);

  const arrowLeft = (
    <div className='arrow-container arrow-left-container'>
      <ArrowLeft style={{ color: '#099a35', fontSize: 70 }} />
    </div>
  );

  const arrowRight = (
    <div className='arrow-container arrow-right-container'>
      <ArrowRight style={{ color: '#099a35', fontSize: 70 }} />
    </div>
  );

  useEffect(() => {
    const container = document.getElementById('content-slider-container');

    if (container && itemWidth) {
      const itemsToShow = Math.ceil(container.offsetWidth / (itemWidth + 100));

      setSlideToShow(itemsToShow);
    }
  }, [setSlideToShow, itemWidth]);

  return (
    <div className='content-slider-container' id='content-slider-container'>
      <SizeMe>
        {({ size }) => {
          const proportions = getProportions({ width: size.width ?? 1000 }, '2x1');

          if (!props.itemWidth) {
            setItemWidth(proportions.width);
          }

          const sliderItems = items.map((item) => (
            <div
              style={{
                backgroundImage: `url(${item.url})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                borderRadius: 20,
                height: proportions.height,
                width: proportions.width,
              }}
            />
          ));

          if (sliderItems.length < slideToShow) {
            while (sliderItems.length < slideToShow) {
              sliderItems.push(<div />);
            }
          }

          return (
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
          );
        }}
      </SizeMe>
    </div>
  );
};

export default ContentSlider;
