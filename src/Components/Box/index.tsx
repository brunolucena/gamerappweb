import clsx from 'clsx';
import React from 'react';
import { CSSProperties } from 'react';
import '../Styles/Colors.scss';
import '../Styles/Typography.scss';
import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Color,
  Dimension,
  Direction,
  Display,
  JustifyContent,
  Opacity,
  Overflow,
  Position,
} from 'Components/Styles/models';

const JustifyContentObject = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
};

interface Props {
  style?: CSSProperties;
  className?: string;

  display?: Display;
  direction?: Direction;
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  justifyContent?: JustifyContent;
  gap?: number;

  borderColor?: Color;
  borderStyle?: 1 | 2 | 'shadow' | 'none';
  borderRadius?: number;

  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginStart?: number;
  marginEnd?: number;

  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;

  position?: Position;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  overflow?: Overflow;
  opacity?: Opacity;

  height?: Dimension;
  width?: Dimension;
  maxHeight?: Dimension;
  maxWidth?: Dimension;
  minHeight?: Dimension;
  minWidth?: Dimension;

  userSelect?: 'auto' | 'none';

  zIndex?: number;
}

const Box: React.FC<Props> = ({
  alignContent,
  alignItems,
  alignSelf,
  borderColor = 'darkGray',
  borderRadius,
  borderStyle,
  bottom,
  children,
  className,
  direction,
  display,
  gap,
  height,
  justifyContent,
  left,
  margin,
  marginBottom,
  marginEnd,
  marginStart,
  marginTop,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  position,
  right,
  style,
  top,
  userSelect,
  width,
  zIndex,
}) => {
  const classes = clsx(
    className,
    (borderStyle === 1 || borderStyle === 2) && 'border',
    borderStyle && borderColor === 'blue' && 'border-color-blue',
    borderStyle && borderColor === 'darkGray' && 'border-color-dark-gray',
    borderStyle && borderColor === 'gray' && 'border-color-gray',
    borderStyle && borderColor === 'green' && 'border-color-green',
    borderStyle && borderColor === 'lightGray' && 'border-color-light-gray',
    borderStyle && borderColor === 'red' && 'border-color-red'
  );

  return (
    <div
      className={classes}
      style={{
        display,
        flexDirection: direction,
        alignContent,
        alignItems,
        alignSelf,
        justifyContent: justifyContent ? JustifyContentObject[justifyContent] : undefined,
        borderRadius,
        boxShadow: borderStyle === 'shadow' ? '0 0 8px rgba(0, 0, 0, 0.1)' : 'none',
        gap,
        margin,
        marginTop,
        marginBottom,
        marginInlineStart: marginStart,
        marginInlineEnd: marginEnd,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        position,
        top,
        bottom,
        left,
        right,
        overflow,
        height,
        width,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        userSelect,
        zIndex,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
