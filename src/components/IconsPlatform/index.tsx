interface Props {
  name: string;
  icon: string;
}

const IconPlatform: React.FC<Props> = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${props.icon})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          width: '17px',
          height: '17px',
        }}
      ></div>
    </div>
  );
};

export default IconPlatform;
