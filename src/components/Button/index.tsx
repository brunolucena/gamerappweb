import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export type ButtonType = 'primary' | 'secondary' | 'clear';

interface Props {
  type?: ButtonType;
  external?: boolean;
  onClick?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  to?: string;
  buttonType?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ buttonType, children, external, onClick, to, type }) => {
  const classes = clsx('button', {
    clear: type === 'clear',
    primary: type === 'primary',
    secondary: type === 'secondary',
  });

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
    <Link onClick={() => onClick && onClick()} to={to} style={{ textAlign: 'center', textDecoration: 'none' }}>
      {button}
    </Link>
  ) : (
    <button className='button-container' onClick={(event) => onClick && onClick(event)} type={buttonType}>
      {button}
    </button>
  );
};

export default Button;
