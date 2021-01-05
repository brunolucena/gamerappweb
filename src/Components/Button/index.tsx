import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, BtnStyles } from './styles';

export type ButtonType = 'primary' | 'secondary' | 'clear';

interface Props {
  type?: ButtonType;
  external?: boolean;
  onClick?: ((event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  to?: string;
  buttonType?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ buttonType, children, external, onClick, to, type }) => {
  const button = <BtnStyles type2={type}>{children}</BtnStyles>;

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
    <Btn onClick={(event) => onClick && onClick(event)} type={buttonType}>
      {button}
    </Btn>
  );
};

export default Button;
