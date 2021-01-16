import ArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Box from 'components/Box';
import clsx from 'clsx';
import Heading from 'components/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from '@material-ui/lab/Skeleton';
import Slider from 'react-slick';
import styles from './styles.module.scss';
import { BannerModel } from 'modules/Loja/Store/Banner/models';
import { formatCurrency } from 'helpers/formatters';
import { remoteConfig } from 'lib/Firebase/init-firebase';

interface Props {
  insideArrows?: boolean;
  items: BannerModel[];
  slidesToShow?: number;
}

export default function ContentSlider({
  insideArrows,
  items,
  slidesToShow = 1,
}: React.PropsWithChildren<Props>) {
  const bannersWithInfoEnabled = remoteConfig?.getValue('banners_with_info_enabled').asBoolean();

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

  const classes = clsx('content-slider-container', insideArrows && 'inside-arrows', styles['content-slider-container']);

  const sliderItems = items.map((item) => {
    const hasBottomInfo = item.badgeText || item.price;

    const element = (
      <Box className={styles.itemContainer}>
        <Image alt={`Banner ${item.badgeText} - ${item.name}`} src={item.imageUrl} layout="fill" objectFit="cover" />
        <Box position="absolute" top={0} bottom={0} right={0} left={0} style={{ backgroundColor: '#dcdcdc' }} display="flex" alignItems="center" justifyContent="center" zIndex={-1}>
          <Skeleton variant="rect" width="100%" height="100%" />
        </Box>

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

  if (sliderItems.length < slidesToShow) {
    while (sliderItems.length < slidesToShow) {
      sliderItems.push(<div />);
    }
  }

  return (
    <div className={classes} id='content-slider-container'>
      <div style={{ position: 'relative', width: '100%', paddingTop: '50%' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
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
            slidesToShow={slidesToShow}
            slidesToScroll={1}
            swipeToSlide
          >
            {sliderItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
