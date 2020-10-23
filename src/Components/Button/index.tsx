import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, BtnStyles } from './styles';

type ButtonType = 'primary' | 'secondary';

interface Props {
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  to?: string;
  type?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, onClick, to, type } = props;

  const button = <BtnStyles type2={type || ''}>{children}</BtnStyles>;

  return to ? (
    <Link to={to} style={{ textAlign: 'center', textDecoration: 'none' }}>
      {button}
    </Link>
  ) : (
    <Btn onClick={(event) => onClick && onClick(event)}>{button}</Btn>
  );
};

export default Button;
