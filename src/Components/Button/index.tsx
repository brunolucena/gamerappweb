import React from 'react';
import { Btn } from './styles';

type ButtonType = 'primary' | 'secondary';

interface Props {
  type?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, type } = props;

  return <Btn type2={type || ''}>{children}</Btn>;
};

export default Button;
