import React from 'react';
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
    platform: Array<string>;
    duration: any;
    pay: string
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
                <Grid item xs={6} md={6}>
                    <span className="badge --primary">-{props.discount}%</span>
                </Grid>
                <Grid item xs={6} md={6}>
                    <span>R${StringFormat.formatToMonetary(props.value)}</span>
                </Grid>
            </Grid>
        </div>
        <div className="footer">
            <Grid container spacing={1}>
                <Grid item xs={2} md={2}>
                    <IconPlatform name="windows"/>
                </Grid>
                <Grid item xs={2} md={2}>
                    <IconPlatform name="steam"/>
                </Grid>
                <Grid item xs={6} md={6}>
                    <p className="duration">{props.duration && moment(props.duration).format('DD/MM/YYYY')}</p>
                </Grid>
                <Grid item xs={2} md={2}>
                   <TimerIcon style={{fontSize:"17px",color: 'var(--primary)'}}/>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <button style={{
                        cursor: 'pointer',
                        border: 'none', 
                        padding: '0.7rem',
                        marginBottom: '0.5rem', 
                        width: '100%', 
                        backgroundColor: 'var(--primary)', 
                        borderRadius: '4px',
                        color: 'var(--white)',
                        fontWeight: 'bold'
                        }}
                        onClick={()=>window.open(props.pay, '_blank')}
                        >COMPRAR</button>
                </Grid>
            </Grid>
        </div>
    </div>
}

export default CardStore;