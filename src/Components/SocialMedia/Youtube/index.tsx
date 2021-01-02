import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';

import './styles.scss';

type Types = 'MaterialIcon' | 'CircleOutline';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const Youtube: React.FC<Props> = (props) => {
  const { color, link, type, width } = props;

  function getIcon() {
    switch (type) {
      case 'MaterialIcon': {
        return <YouTubeIcon style={{ color, width, height: '100%' }} />;
      }

      case 'CircleOutline': {
        return (
          <svg xmlns='http://www.w3.org/2000/svg' width={width} height={width} viewBox='0 0 36.037 36.04'>
            <g transform='translate(-362.393 -1217.239)'>
              <path
                d='M362.893,1235.259a17.518,17.518,0,1,1,17.516,17.52,17.517,17.517,0,0,1-17.516-17.52'
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d='M389.53,1231.557c0,.186.011.364.011.553a12.012,12.012,0,0,1-18.492,10.116,9.128,9.128,0,0,0,1.009.058,8.437,8.437,0,0,0,5.242-1.81,4.22,4.22,0,0,1-3.941-2.936,3.871,3.871,0,0,0,.79.083,4.11,4.11,0,0,0,1.114-.148,4.232,4.232,0,0,1-3.388-4.14v-.061a4.192,4.192,0,0,0,1.913.531,4.217,4.217,0,0,1-1.874-3.514,4.173,4.173,0,0,1,.571-2.118,11.984,11.984,0,0,0,8.7,4.409,4.149,4.149,0,0,1-.112-.96,4.225,4.225,0,0,1,7.308-2.893,8.428,8.428,0,0,0,2.542-1.336,4.746,4.746,0,0,1-1.72,2.649,8.589,8.589,0,0,0,2.43-.663,8.765,8.765,0,0,1-2.107,2.18'
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeLinecap: 'round',
                }}
              />
            </g>
          </svg>
        );
      }

      default:
        break;
    }
  }

  return link ? (
    <a className='youtube-container' href={link} rel='noopener noreferrer' target='_blank'>
      {getIcon()}
    </a>
  ) : (
    <div className='youtube-container'>{getIcon()}</div>
  );
};

Youtube.defaultProps = {
  color: '#2CAAE1',
  type: 'MaterialIcon',
  width: 30,
};

export default Youtube;
