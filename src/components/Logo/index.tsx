import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles.module.scss';

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
  const classes = clsx(styles.logo, className);

  const logos: LogoOptions = {
    'inline-white': '/images/logo/inline-white.png',
    'inline-green': '/images/logo/inline-green.png',
    'block-green-gray': '/images/logo/block-green-gray.png',
  };

  return <Image alt='GamerApp Logo' className={classes} src={logos[variant]} objectFit="contain" height="100%" width={width ?? '100%'} />;
};

export default Logo;
