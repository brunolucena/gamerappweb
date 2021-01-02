import React from 'react';
import IconFacebook from '@material-ui/icons/Facebook';

import './styles.scss';

type Types = 'MaterialIcon' | 'CircleOutline';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const Facebook: React.FC<Props> = props => {
  const { color, link, type, width } = props;

  function getIcon() {
    switch (type) {
      case 'MaterialIcon': {
        return <IconFacebook style={{ color, width, height: '100%' }} />;
      }

      case 'CircleOutline': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 35.51 35.515"
            className="circle-outline"
          >
            <g transform="translate(-380.175 -1258.449)">
              <path
                d="M380.675,1276.208a17.255,17.255,0,1,1,17.253,17.256,17.254,17.254,0,0,1-17.253-17.256"
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeMiterlimit: 10,
                }}
              />
              <path
                style={{
                  fill: 'none',
                  stroke: color,
                }}
                d="M401.8,1276.639h-2.9v10.342h-4.295v-10.342h-2.048v-3.657h2.048v-2.372a4.035,4.035,0,0,1,4.337-4.343l3.19.024v3.544H399.82a.881.881,0,0,0-.92,1v2.15h3.282Z"
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
    <a
      className="facebook-container"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {getIcon()}
    </a>
  ) : (
    <div className="facebook-container">{getIcon()}</div>
  );
};

Facebook.defaultProps = {
  color: '#2d88ff',
  type: 'MaterialIcon',
  width: 30,
};

export default Facebook;
