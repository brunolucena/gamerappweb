import React from 'react';
import iconWindows from './iconWindows.png';
import iconSteam from './iconSteam.png';

interface Props {
    name: string;
}

const renderIcon = (name: string) => {
    switch (String(name).toUpperCase()) {
        case 'WINDOWS':
            return <div 
            style={{
                backgroundImage: `url(${iconWindows})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                width: '17px',
                height: '17px'
              }}
            ></div>
        case 'STEAM':
            return <div 
            style={{
                backgroundImage: `url(${iconSteam})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                width: '17px',
                height: '17px'
              }}></div>
        default:
            return <div
            style={{
                backgroundImage: `url(${iconWindows})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
                width: '17px',
                height: '17px'
              }}
            ></div>
    }
}
const IconPlatform: React.FC<Props> = (props) => {
    return <div>
        {renderIcon(props.name)}
    </div>
}

export default IconPlatform;