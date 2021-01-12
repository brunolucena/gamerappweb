import IconInstagram from '@material-ui/icons/Instagram';

type Types = 'MaterialIcon' | 'CircleOutline';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const Instagram: React.FC<Props> = props => {
  const { color, link, type, width } = props;

  function getIcon() {
    switch (type) {
      case 'MaterialIcon': {
        return <IconInstagram style={{ color, width, height: '100%' }} />;
      }

      case 'CircleOutline': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 36.191 36.194"
          >
            <g transform="translate(-310.646 -1214.403)">
              <path
                d="M311.146,1232.5a17.6,17.6,0,1,1,17.594,17.6,17.6,17.6,0,0,1-17.594-17.6"
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M5.506,0h8.442a5.506,5.506,0,0,1,5.506,5.506V13.95a5.5,5.5,0,0,1-5.5,5.5H5.506A5.506,5.506,0,0,1,0,13.948V5.506A5.506,5.506,0,0,1,5.506,0Z"
                transform="translate(319.015 1222.774)"
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeLinecap: 'round',
                }}
              />
              <path
                d="M333.3,1232.5a4.56,4.56,0,1,1-4.561-4.561A4.561,4.561,0,0,1,333.3,1232.5Z"
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeLinecap: 'round',
                }}
              />
              <path
                d="M335.87,1226.661a1.337,1.337,0,1,1-1.336-1.336,1.336,1.336,0,0,1,1.336,1.336"
                style={{ fill: color }}
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
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {getIcon()}
    </a>
  ) : (
      <div>{getIcon()}</div>
    );
};

Instagram.defaultProps = {
  color: '#724FC7',
  type: 'MaterialIcon',
  width: 30,
};

export default Instagram;
