import clsx from 'clsx';
import React from 'react';
import { Color, TextAlign, TextOverflow, TextWeight } from 'Components/Styles/models';
import '../Styles/Colors.scss';
import '../Styles/Typography.scss';

interface Props {
  align?: TextAlign;
  color?: Color;
  inline?: boolean;
  italic?: boolean;
  lineThrough?: boolean;
  overflow?: TextOverflow;
  size?: 12 | 14 | 16 | 18;
  /** Truncate the text to a single line. */
  truncate?: boolean;
  weight?: TextWeight;
}

const Text: React.FC<Props> = ({
  align = 'left',
  children,
  color = 'darkGray',
  inline = false,
  italic = false,
  lineThrough = false,
  overflow = 'breakWord',
  size = 16,
  truncate = false,
  weight = 'normal',
}) => {
  const classes = clsx(
    'antialiased',
    'sans-serif',
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
    italic && 'font-style-italic',
    lineThrough && 'text-decoration-line-through',
    overflow === 'breakWord' && 'break-word',
    overflow === 'noWrap' && 'no-wrap',
    size === 12 && 'font-size-12',
    size === 14 && 'font-size-14',
    size === 16 && 'font-size-16',
    size === 18 && 'font-size-18',
    truncate && 'truncate',
    weight === 'bold' && 'font-weight-bold',
    weight === 'semi-bold' && 'font-weight-semi-bold',
    weight === 'normal' && 'font-weight-normal'
  );

  const Tag = inline ? 'span' : 'div';

  return (
    <Tag className={classes} {...(truncate && typeof children === 'string' && { title: children })}>
      {children}
    </Tag>
  );
};

Text.defaultProps = {
  align: 'left',
  color: 'darkGray',
  inline: false,
  italic: false,
  overflow: 'breakWord',
  size: 16,
  truncate: false,
  weight: 'normal',
};

export default Text;
