// import { remoteConfig } from 'Utils/Firebase/init-firebase';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Box from 'components/Box';
import Heading from 'components/Heading';
import Link from 'next/link';
import Slider from 'react-slick';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { BannerModel } from 'modules/Loja/Store/Banner/models';
import { SizeMe } from 'react-sizeme';
import { formatCurrency } from 'helpers/formatters';
import { getProportions } from 'helpers/functions';
import { useEffect, useState } from 'react';

interface Props {
  insideArrows?: boolean;
  itemWidth?: number;
  items: BannerModel[];
  itemsOnScreen?: number;
}

const ContentSlider: React.FC<Props> = ({
  insideArrows,
  itemWidth: itemWidthProps,
  items,
  itemsOnScreen = 1,
}) => {
  const [itemWidth, setItemWidth] = useState(itemWidthProps);
  const [slideToShow, setSlideToShow] = useState(itemsOnScreen);

  // const bannersWithInfoEnabled = remoteConfig.getValue('banners_with_info_enabled').asBoolean();
  const bannersWithInfoEnabled = false;

  const arrowLeft = (
    <div className={styles['arrow-container']}>
      <ArrowLeft style={{ color: insideArrows ? '#ffffff' : '#099a35', fontSize: 70, opacity: insideArrows ? 0.75 : 1 }} />
    </div>
  );

  const arrowRight = (
    <div className={styles['arrow-container']}>
      <ArrowRight style={{ color: insideArrows ? '#ffffff' : '#099a35', fontSize: 70, opacity: insideArrows ? 0.75 : 1 }} />
    </div>
  );

  useEffect(() => {
    const container = document.getElementById('content-slider-container');

    if (container && itemWidth) {
      const itemsToShow = Math.ceil(container.offsetWidth / (itemWidth + 100));

      setSlideToShow(itemsToShow);
    }
  }, [setSlideToShow, itemWidth]);

  const classes = clsx('content-slider-container', insideArrows && 'inside-arrows', styles['content-slider-container']);

  return (
    <div className={classes} id='content-slider-container'>
      <SizeMe>
        {({ size }) => {
          const proportions = getProportions({ width: size.width ?? 1000 }, '2x1');

          if (!itemWidthProps) {
            setItemWidth(proportions.width);
          }

          const sliderItems = items.map((item) => {
            const hasBottomInfo = item.badgeText || item.price;

            const element = (
              <Box
                borderTopLeftRadius={20}
                borderTopRightRadius={20}
                borderBottomLeftRadius={20}
                borderBottomRightRadius={20}
                height={proportions.height}
                position='relative'
                style={{
                  backgroundImage: `url('${item.imageUrl}')`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'none',
                  backgroundSize: 'cover',
                }}
                width={proportions.width}
              >
                {bannersWithInfoEnabled && (
                  <Box bottom={90} left={37} position='absolute'>
                    {item.name && (
                      <Heading color='white' size={44}>
                        {item.name}
                      </Heading>
                    )}

                    {hasBottomInfo && (
                      <Box alignItems='center' display='flex' gap={18} marginTop={32}>
                        {item.badgeText && (
                          <Box className={styles.badge}>
                            <Heading color='white'>{item.badgeText}</Heading>
                          </Box>
                        )}

                        {item.price && <Heading color='white'>{formatCurrency(item.price)}</Heading>}
                      </Box>
                    )}
                  </Box>
                )}
              </Box>
            );

            return item.storeProductId || item.sessionId ? (
              <Link
                href={item.storeProductId ? `/produto/${item.storeProductId}` : `/produtos/${item.sessionId}`}
              >
                <a style={{ textDecoration: 'none' }}>
                  {element}
                </a>
              </Link>
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
