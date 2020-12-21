import React, { useEffect, useState } from 'react';
import './styles.scss';
import StringFormat from 'Utils/StringFormat';
import { Grid } from '@material-ui/core';
import IconPlatform from 'Components/IconsPlatform';
import TimerIcon from '@material-ui/icons/Timer';
import moment from 'moment';

interface Props {
    banner: string;
    title: string;
    discount: any;
    value: number;
    platform: any;
    duration: any;
    pay: string;
    dateHourNow: any;
}

const CardStore: React.FC<Props> = (props) => {

    return <div className="containerCardStore">
        <div className="banner"
            style={{
                backgroundImage: `url(${props.banner})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                borderRadius: '8px 8px 0px 0px',
                width: '100%',
                height: '114.75px'
            }}
        >

        </div>
        <div className="body">
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <p className="title">{props.title}</p>
                </Grid>
                {
                    moment(props.duration).isAfter(props.dateHourNow) && <Grid item xs={6} md={6}>
                        <span className="badge --primary">-{props.discount}%</span>
                    </Grid>
                }
                <Grid item xs={6} md={6}>
                    <span>R${StringFormat.formatToMonetary(props.value)}</span>
                </Grid>
            </Grid>
        </div>
        <div className="footer">
            <Grid container spacing={1}>
                {
                    props.platform.map((plat: any) => {
                        return <Grid item xs={2} md={2}>
                            <IconPlatform name={plat.platformName} icon={plat.imageUrl}/>
                        </Grid>
                    })
                }
                {
                    props.duration && moment(props.duration).isAfter(props.dateHourNow) && <>
                        <Grid item xs={5} md={5}>
                            <p className="duration">{moment(moment(props.duration).diff(props.dateHourNow)).format('DD hh:mm:ss')}</p>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <TimerIcon style={{ fontSize: "17px", color: 'var(--primary)' }} />
                        </Grid>
                    </>
                }
            </Grid>
        </div>
    </div>
}

export default CardStore;