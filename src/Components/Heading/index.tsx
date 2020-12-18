import clsx from 'clsx';
import React from 'react';
import { Color, TextAlign, TextOverflow } from 'Components/Styles/models';
import '../Styles/Colors.scss';
import '../Styles/Typography.scss';

interface Props {
  align?: TextAlign;
  color?: Color;
  id?: string;
  overflow?: TextOverflow;
  size?: 20 | 28 | 36;
  /** Truncate the text to a single line. */
  truncate?: boolean;
}

const Heading: React.FC<Props> = ({ align, children, color, id, overflow, size, truncate }) => {
  const classes = clsx(
    'antialiased',
    'sans-serif',
    align === 'center' && 'align-center',
    align === 'justify' && 'align-justify',
    align === 'left' && 'align-left',
    align === 'right' && 'align-right',
    color === 'blue' && 'blue',
    color === 'darkGray' && 'darkGray',
    color === 'gray' && 'gray',
    color === 'green' && 'green',
    color === 'lightGray' && 'lightGray',
    color === 'red' && 'red',
    overflow === 'breakWord' && 'break-word',
    overflow === 'noWrap' && 'no-wrap',
    size === 20 && 'font-size-20',
    size === 28 && 'font-size-28',
    size === 36 && 'font-size-36',
    truncate && 'truncate'
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

Heading.defaultProps = {
  align: 'left',
  color: 'darkGray',
  overflow: 'breakWord',
  size: 36,
  truncate: false,
};

export default Heading;
