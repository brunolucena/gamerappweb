import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  maxWidth?: string;
  style?: React.CSSProperties;
}

/**
 * Define um max-width padrão, alinhando o componente no centro.
 */
const Container: React.FC<Props> = (props) => {
  const { children, className, maxWidth, style } = props;

  const classes = clsx(styles['container-container'], className);

  return (
    <div
      className={classes}
      style={{
        maxWidth,
        width: '100%',
        margin: '0 auto',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  maxWidth: '1200px',
  style: {},
};

export default Container;
