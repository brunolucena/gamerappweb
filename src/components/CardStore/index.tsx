import Alarm from '@material-ui/icons/Alarm';
import Box from 'components/Box';
import Countdown from 'react-countdown';
import IconPlatform from 'components/IconsPlatform';
import Link from 'next/link';
import moment from 'moment';
import styles from './styles.module.scss';
import Text from 'components/Text';
import { formatCurrency } from 'helpers/formatters';
import { getProportions } from 'helpers/functions';
import { Grid } from '@material-ui/core';
import { ProductPlatform } from 'modules/Loja/Lib/ProductDetails/models';
import { SizeMe } from 'react-sizeme';

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
            <Box className={styles['countdown backgroundTransparent']}>
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
      <a className={styles.containerCardStore}>
        <SizeMe>
          {({ size }) => {
            const proportions = getProportions({ width: size.width ?? 200 }, '2x1');

            return (
              <>
                <div
                  className={styles.banner}
                  style={{
                    backgroundImage: `url(${banner})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'none',
                    backgroundSize: 'cover',
                    borderRadius: '8px 8px 0px 0px',
                    width: '100%',
                    height: proportions.height,
                  }}
                >
                  {duration && moment(duration).isAfter(dateHourNow) && (
                    <Grid container spacing={1} className={styles.containerCountDown}>
                      <Grid item xs={10} md={10}>
                        {countdown}
                      </Grid>
                    </Grid>
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
              </>
            );
          }}
        </SizeMe>
      </a>
    </Link>
  );
}

export default CardStore;
