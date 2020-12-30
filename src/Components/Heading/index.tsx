import clsx from 'clsx';
import React from 'react';
import { Color, TextAlign, TextOverflow, TextWeight } from 'Components/Styles/models';
import '../Styles/Colors.scss';
import '../Styles/Typography.scss';

interface Props {
  align?: TextAlign;
  className?: string;
  color?: Color;
  id?: string;
  overflow?: TextOverflow;
  size?: 20 | 28 | 36 | 44;
  /** Truncate the text to a single line. */
  truncate?: boolean;
  weight?: TextWeight;
}

const Heading: React.FC<Props> = ({
  align = 'left',
  className,
  children,
  color = 'darkGray',
  id,
  overflow = 'breakWord',
  size = 36,
  truncate = false,
  weight = 'semi-bold',
}) => {
  const classes = clsx(
    'antialiased',
    'sans-serif',
    className,
    align === 'center' && 'align-center',
    align === 'justify' && 'align-justify',
    align === 'left' && 'align-left',
    align === 'right' && 'align-right',
    color === 'blue' && 'blue',
    color === 'darkGray' && 'dark-gray',
    color === 'gray' && 'gray',
    color === 'green' && 'green',
    color === 'lightGray' && 'light-gray',
    color === 'red' && 'red',
    color === 'white' && 'white',
    overflow === 'breakWord' && 'break-word',
    overflow === 'noWrap' && 'no-wrap',
    size === 20 && 'font-size-20',
    size === 28 && 'font-size-28',
    size === 36 && 'font-size-36',
    size === 44 && 'font-size-44',
    truncate && 'truncate',
    weight === 'bold' && 'font-weight-bold',
    weight === 'semi-bold' && 'font-weight-semi-bold',
    weight === 'normal' && 'font-weight-normal'
  );

  function getTag() {
    switch (size) {
      case 20:
        return 'h3';

      case 28:
        return 'h2';

      case 36:
        return 'h1';

      default:
        return 'h1';
    }
  }

  const Tag = getTag();

  return (
    <Tag className={classes} id={id} {...(truncate && typeof children === 'string' && { title: children })}>
      {children}
    </Tag>
  );
};

export default Heading;
