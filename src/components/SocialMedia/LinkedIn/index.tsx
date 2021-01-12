import IconLinkedIn from '@material-ui/icons/LinkedIn';

type Types = 'MaterialIcon' | 'CircleOutline';

interface Props {
  color?: string;
  link?: string;
  type?: Types;
  width?: number;
}

const LinkedIn: React.FC<Props> = props => {
  const { color, link, type, width } = props;

  function getIcon() {
    switch (type) {
      case 'MaterialIcon': {
        return <IconLinkedIn style={{ color, width, height: '100%' }} />;
      }

      case 'CircleOutline': {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 36.191 36.194"
          >
            <g transform="translate(-414.523 -1214.403)">
              <path
                d="M415.023,1232.5a17.6,17.6,0,1,1,17.594,17.6,17.6,17.6,0,0,1-17.594-17.6"
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeMiterlimit: 10,
                }}
              />
              <path
                d="M641.231,436.482h3.828V424.177h-3.828Zm1.915-18.422a2.218,2.218,0,1,0,2.217,2.218A2.217,2.217,0,0,0,643.146,418.06Zm11.65,5.812a4.019,4.019,0,0,0-3.619,1.988h-.052v-1.682h-3.666v12.305h3.82V430.4c0-1.605.3-3.161,2.294-3.161,1.963,0,1.988,1.836,1.988,3.263v5.984h3.823v-6.749C659.383,426.42,658.667,423.872,654.8,423.872Z"
                transform="translate(-216.902 803.843)"
                style={{
                  fill: 'none',
                  stroke: color,
                  strokeMiterlimit: 10,
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

LinkedIn.defaultProps = {
  color: '#0077B5',
  type: 'MaterialIcon',
  width: 30,
};

export default LinkedIn;
