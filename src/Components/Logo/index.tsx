import clsx from 'clsx';
import LogoBlockGreenGray from './assets/block-green-gray.png';
import LogoInlineGreen from './assets/inline-green.png';
import LogoInlineWhite from './assets/inline-white.png';
import React from 'react';
import './styles.scss';

type LogoTypes = 'inline-white' | 'inline-green' | 'block-green-gray';

type LogoOptions = {
  [key in LogoTypes]: string;
};

interface Props {
  className?: string;
  variant?: LogoTypes;
  width?: number | string;
}

const Logo: React.FC<Props> = ({ className, variant = 'inline-white', width }) => {
  const classes = clsx('logo', className);

  const logos: LogoOptions = {
    'inline-white': LogoInlineWhite,
    'inline-green': LogoInlineGreen,
    'block-green-gray': LogoBlockGreenGray,
  };

  return <img alt='GamerApp Logo' className={classes} src={logos[variant]} style={{ width }} />;
};

export default Logo;
