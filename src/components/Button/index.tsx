import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';

export type ButtonType = 'primary' | 'secondary' | 'clear';

interface Props {
  buttonType?: 'button' | 'submit' | 'reset';
  external?: boolean;
  onClick?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  to?: string;
  type?: ButtonType;
}

const Button: React.FC<Props> = ({ buttonType, children, external, onClick, to, type }) => {
  const classes = clsx(
    styles.button,
    type === 'clear' && styles.clear,
    type === 'primary' && styles.primary,
    type === 'secondary' && styles.secondary,
  );

  const button = <div className={classes}>{children}</div>;

  return external ? (
    <a
      href={to}
      onClick={() => onClick && onClick()}
      rel='noopener noreferrer'
      style={{ textAlign: 'center', textDecoration: 'none' }}
      target='_blank'
    >
      {button}
    </a>
  ) : to ? (
    <Link href={to}>
      <a onClick={() => onClick && onClick()} style={{ textAlign: 'center', textDecoration: 'none' }}>
        {button}
      </a>
    </Link>
  ) : (
        <button className={styles['button-container']} onClick={(event) => onClick && onClick(event)} type={buttonType}>
          {button}
        </button>
      );
};

export default Button;
