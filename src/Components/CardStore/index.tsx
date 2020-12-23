import Alarm from '@material-ui/icons/Alarm';
import Box from 'Components/Box';
import Countdown from 'react-countdown';
import IconPlatform from 'Components/IconsPlatform';
import moment from 'moment';
import React from 'react';
import StringFormat from 'Utils/StringFormat';
import Text from 'Components/Text';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
            <Box className='countdown'>
              <Box className='alarm-wrapper'>
                <Box className='alarm'>
                  <Alarm style={{ color: '#0dac3d', fontSize: 32 }} />
                </Box>
              </Box>
              <Box marginStart={3}>
                <Text className='time'>
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
      <div
        className='banner'
        style={{
          backgroundImage: `url(${props.banner})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          borderRadius: '8px 8px 0px 0px',
          width: '100%',
          height: '114.75px',
        }}
      ></div>
      <div className='body'>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <p className='title'>{props.title}</p>
          </Grid>
          {moment(props.duration).isAfter(props.dateHourNow) && (
            <Grid item xs={6} md={6}>
              <span className='badge --primary'>-{props.discount}%</span>
            </Grid>
          )}
          <Grid item xs={6} md={6}>
            <Text size={18} weight='semi-bold'>
            {props.oldPrice ? <Text color='lightGray' lineThrough size={12}>R${StringFormat.formatToMonetary(props.oldPrice)}</Text> : ''}
              R${StringFormat.formatToMonetary(props.value)}
            </Text>
          </Grid>
        </Grid>
      </div>
      <div className='footer'>
        <Grid container spacing={1}>
          {props?.platform?.map((plat: any) => {
            return (
              <Grid item xs={2} md={2}>
                <IconPlatform name={plat.platformName} icon={plat.imageUrl} />
              </Grid>
            );
          })}
          {props.duration && moment(props.duration).isAfter(props.dateHourNow) && (
            <>
              <Grid item xs={12} md={12}>
                {countdown}
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </Link>
  );
};

export default CardStore;
