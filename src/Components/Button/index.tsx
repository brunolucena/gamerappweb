import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, BtnStyles } from './styles';

type ButtonType = 'primary' | 'secondary';

interface Props {
  buttonType?: 'button' | 'submit' | 'reset';
  external?: boolean;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  to?: string;
  type?: string;
}

const Button: React.FC<Props> = ({ buttonType, children, external, onClick, to, type }) => {
  const button = <BtnStyles type2={type || ''}>{children}</BtnStyles>;

  return external ? (
    <a href={to} rel='noopened noreferrer' style={{ textAlign: 'center', textDecoration: 'none' }} target='_blank'>
      {button}
    </a>
  ) : to ? (
    <Link to={to} style={{ textAlign: 'center', textDecoration: 'none' }}>
      {button}
    </Link>
  ) : (
    <Btn type={buttonType} onClick={(event) => onClick && onClick(event)}>
      {button}
    </Btn>
  );
};

export default Button;
