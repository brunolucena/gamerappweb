import Alarm from '@material-ui/icons/Alarm';
import Box from 'components/Box';
import Countdown from 'react-countdown';
import IconPlatform from 'components/IconsPlatform';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './styles.module.scss';
import Text from 'components/Text';
import { formatCurrency } from 'helpers/formatters';
import { Grid } from '@material-ui/core';
import { ProductPlatform } from 'modules/Loja/Lib/ProductDetails/models';

interface Props {
  banner: string;
  dateHourNow: moment.Moment;
  discount: number | null;
  duration?: Date | string;
  id: string;
  isAvailable: boolean;
  oldPrice: number;
  platforms?: ProductPlatform[];
  title: string;
  value: number;
}

function CardStore({
  banner,
  dateHourNow,
  discount,
  duration,
  id,
  isAvailable,
  oldPrice,
  platforms,
  title,
  value,
}: React.PropsWithChildren<Props>) {
  const countdown = (
    <Countdown
      date={duration}
      renderer={({ completed, formatted }) => {
        const { days, hours, minutes, seconds } = formatted;

        return (
          !completed && (
            <Box className={`${styles.countdown} ${styles.backgroundTransparent}`}>
              <Box className={styles['alarm-wrapper']}>
                <Box className={styles.alarm}>
                  <Alarm style={{ color: '#0dac3d', fontSize: 22 }} />
                </Box>
              </Box>
              <Box marginStart={3}>
                <Text size={14}>
                  {days !== '00' ? `${days}d` : ''} {hours}:{minutes}:{seconds}
                </Text>
              </Box>
            </Box>
          )
        );
      }}
    />
  );

  return (
    <Link href={`/produto/${id}`}>
      <a className={`${styles.containerCardStore} containerCardStore`}>
        <div className={styles.banner}>
          <Image alt={title} src={banner} layout="fill" objectFit="cover"/>
            <Box position="absolute" top={0} bottom={0} right={0} left={0} backgroundColor="#dcdcdc" borderTopLeftRadius={8} borderTopRightRadius={8} zIndex={0}>
              <Skeleton variant="rect" width="100%" height="100%"/>
            </Box>
          {duration && moment(duration).isAfter(dateHourNow) && (
            <Box className={styles.containerCountDown}>
              {countdown}
            </Box>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.body}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <p className={styles.title}>{title}</p>
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems='center'>
              {(moment(duration).isAfter(dateHourNow) && discount && discount > 0) && (
                <div className={styles['discount-wrapper']}>
                  <span className={`${styles.badge} ${styles['--primary']}`}>-{discount}%</span>
                </div>
              )}

              <Grid item xs={discount && discount > 0 ? 6 : 12} md={discount && discount > 0 ? 6 : 12}>
                {isAvailable ? (
                  <Text className={styles.price} weight='bold'>
                    {value
                      ? <>
                        {oldPrice ? (
                          <Text color='lightGray' lineThrough size={12}>
                            {formatCurrency(oldPrice)}
                          </Text>
                        ) : (
                          ''
                        )}
                        {formatCurrency(value)}
                      </>
                      : <span>Gratuito</span>
                    }
                  </Text>
                ) : (
                    <Text weight='bold'>Indisponível</Text>
                )}
              </Grid>
            </Grid>
          </div>
          <div className={styles.footer}>
            {platforms?.map((platform, index) => (
              <IconPlatform
                key={platform.id + index}
                name={platform.platformName}
                icon={platform.imageUrl}
              />
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default CardStore;
