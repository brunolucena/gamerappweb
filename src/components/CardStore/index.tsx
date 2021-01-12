import Alarm from '@material-ui/icons/Alarm';
import Box from 'components/Box';
import Countdown from 'react-countdown';
import IconPlatform from 'components/IconsPlatform';
import moment from 'moment';
import React from 'react';
import StringFormat from 'Utils/StringFormat';
import Text from 'components/Text';
import { getProportions } from 'Helpers/functions';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SizeMe } from 'react-sizeme';
import './styles.scss';

interface Props {
  banner: string;
  title: string;
  discount: any;
  value: number;
  oldPrice: number;
  platform: any;
  duration: any;
  pay: string;
  dateHourNow: any;
  id: string;
}

const CardStore: React.FC<Props> = (props) => {
  const { id } = props;

  const countdown = (
    <Countdown
      date={props.duration}
      renderer={({ completed, formatted }) => {
        const { days, hours, minutes, seconds } = formatted;

        return (
          !completed && (
            <Box className='countdown backgroundTransparent'>
              <Box className='alarm-wrapper'>
                <Box className='alarm'>
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
    <Link className='containerCardStore' to={`/produto/${id}`}>
      <SizeMe>
        {({ size }) => {
          const proportions = getProportions({ width: size.width ?? 200 }, '16x9');

          return (
            <>
              <div
                className='banner'
                style={{
                  backgroundImage: `url(${props.banner})`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'none',
                  backgroundSize: 'cover',
                  borderRadius: '8px 8px 0px 0px',
                  width: '100%',
                  height: proportions.height,
                }}
              >
                {props.duration && moment(props.duration).isAfter(props.dateHourNow) && (
                  <Grid container spacing={1} className='containerCountDown'>
                    <Grid item xs={10} md={10}>
                      {countdown}
                    </Grid>
                  </Grid>
                )}
              </div>
              <div className='content'>
                <div className='body'>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                      <p className='title'>{props.title}</p>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} alignItems='center'>
                    {moment(props.duration).isAfter(props.dateHourNow) && props.discount > 0 && (
                      <div className='discount-wrapper'>
                        <span className='badge --primary'>-{props.discount}%</span>
                      </div>
                    )}
                    <Grid item xs={props.discount > 0 ? 6 : 12} md={props.discount > 0 ? 6 : 12}>
                      {props.value ? (
                        <Text className='price' weight='bold'>
                          {props.oldPrice ? (
                            <Text color='lightGray' lineThrough size={12}>
                              R${StringFormat.formatToMonetary(props.oldPrice)}
                            </Text>
                          ) : (
                              ''
                            )}
                          R${StringFormat.formatToMonetary(props.value)}
                        </Text>
                      ) : (
                          <Text weight='bold'>Indisponível</Text>
                        )}
                    </Grid>
                  </Grid>
                </div>
                <div className='footer'>
                  {props?.platform?.map((plat: any) => {
                    return <IconPlatform name={plat.platformName} icon={plat.imageUrl} />;
                  })}
                </div>
              </div>
            </>
          );
        }}
      </SizeMe>
    </Link>
  );
};

export default CardStore;
