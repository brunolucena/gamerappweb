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

const BorderStyles = {
  1: '1px solid black',
  2: '2px solid black',
  shadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  none: 'none',
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
  borderColor = 'var(--color-darkGray)',
  borderRadius,
  borderStyle,
  bottom,
  children,
  className,
  direction,
  display,
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
  const classes = clsx(className);

  return (
    <div
      className={classes}
      style={{
        display,
        flexDirection: direction,
        alignContent,
        alignItems,
        alignSelf,
        justifyContent,
        borderColor,
        borderRadius,
        borderWidth: borderStyle === 1 || borderStyle === 2 ? BorderStyles[borderStyle] : 'none',
        boxShadow: borderStyle === 'shadow' ? BorderStyles[borderStyle] : 'none',
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
