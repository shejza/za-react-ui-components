import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { FaBeer } from 'react-icons/fa'
import Loader from "../Loader/Loader";
import {
  alignItems,
  alignSelf,
  alignContent,
  animation,
  backgroundFilter,
  background,
  bgColor,
  border,
  borderBottom,
  borderTop,
  borderLeft,
  borderRight,
  borderColor,
  borderWidth,
  borderRadius,
  bottom,
  boxShadow,
  boxSizing,
  clip,
  color,
  cursor,
  columnGap,
  display,
  filter,
  float,
  font,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  flexWrap,
  flexShrink,
  flexDirection,
  flexGrow,
  gridColumn,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplate,
  gap,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  listStyle,
  listStyleImage,
  listStylePosition,
  listStyleType,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  outline,
  outlineColor,
  outlineWidth,
  overflow,
  overflowX,
  overflowY,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  pageBreakAfter,
  pageBreakBefore,
  pageBreakInside,
  pointerEvents,
  position,
  quotes,
  rowGap,
  resize,
  right,
  tabSize,
  tableLayout,
  textAlign,
  textDecoration,
  textIndent,
  textJustify,
  textOverflow,
  textShadow,
  textTransform,
  top,
  transform,
  transformOrigin,
  transformStyle,
  transition,
  verticalAlign,
  visibility,
  whiteSpace,
  width,
  wordBreak,
  wordSpacing,
  wordWrap,
  zIndex,
} from "../properties";

const Button = styled(({ children, leftIcon, rightIcon, loading, color, iconWidth = "16px", ...props }) => {
  let content;
  const [width, setWidth] = useState();
  const ref = useRef();
  const style = loading ? { width } : null;

  if (loading) {
    content = <Loader $color={color} $size="18px" />;
  } else {
    content = (
      <>
        {leftIcon && <FaBeer />}

        {children}

        {rightIcon &&<FaBeer />}
      </>
    );
  }

  useEffect(() => {
    if (ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width + "px");
    }
  }, [loading]);

  return (
    <button type="button" style={style} ref={ref} {...props}>
      {content}
    </button>
  );
})`
  ${alignItems}
  ${alignSelf}
  ${alignContent}
  ${animation}
  ${backgroundFilter}
  ${background}
  ${bgColor}
  ${border}
  ${borderBottom}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderWidth}
  ${borderRadius}
  ${bottom}
  ${boxShadow}
  ${boxSizing}
  ${clip}
  ${color}
  ${cursor}
  ${columnGap}
  ${display}
  ${filter}
  ${float}
  ${font}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontVariant}
  ${fontWeight}
  ${flexWrap}
  ${flexShrink}
  ${flexDirection}
  ${flexGrow}
  ${gridColumn}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridTemplate}
  ${gap}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${letterSpacing}
  ${lineHeight}
  ${listStyle}
  ${listStyleImage}
  ${listStylePosition}
  ${listStyleType}
  ${margin}
  ${marginBottom}
  ${marginLeft}
  ${marginRight}
  ${marginTop}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${order}
  ${outline}
  ${outlineColor}
  ${outlineWidth}
  ${overflow}
  ${overflowX}
  ${overflowY}
  ${padding}
  ${paddingBottom}
  ${paddingTop}
  ${paddingLeft}
  ${paddingRight}
  ${pageBreakAfter}
  ${pageBreakBefore}
  ${pageBreakInside}
  ${pointerEvents}
  ${position}
  ${quotes}
  ${rowGap}
  ${resize}
  ${right}
  ${tabSize}
  ${tableLayout}
  ${textAlign}
  ${textDecoration}
  ${textIndent}
  ${textJustify}
  ${textOverflow}
  ${textShadow}
  ${textTransform}
  ${top}
  ${transform}
  ${transformOrigin}
  ${transformStyle}
  ${transition}
  ${verticalAlign}
  ${visibility}
  ${whiteSpace}
  ${width}
  ${wordBreak}
  ${wordSpacing}
  ${wordWrap}
  ${zIndex}

&&& {
    ${({ theme, disabled }) =>
    disabled &&
      `
    background: ${theme.colors.tertiary300};
    color: ${theme.colors.tertiary0};
    cursor: default;
    pointer-events: none;
    border-color: ${theme.colors.tertiary300};
`}
  }
`;

Button.propTypes = {
  /** Disable button */
  disabled: propTypes.bool,
  /** Func to execute on click */
  onClick: propTypes.func,
};

Button.defaultProps = {
  bgColor: "#54C1A1",
  color: "white",
  height: "40px",
  width: "auto",
  border: "none"
};

export default Button;
