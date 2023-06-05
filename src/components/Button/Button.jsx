import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Loader from "../Loader/Loader";
import Icon from "../Icon/Icon";
import {
  alignItems,
  alignSelf,
  alignContent,
  animation,
  backdropFilter,
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
        {leftIcon && <Icon width={iconWidth}  icon={leftIcon}  />}
        {children}
        {rightIcon && <Icon width={iconWidth}  icon={rightIcon}  />}
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
  ${backdropFilter}
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
    background:  ${theme.colors.gray100};
    color: ${theme.colors.black};
    cursor: default;
    pointer-events: none;
    border-color: ${theme.colors.gray100};
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
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px",
  cursor: "pointer",
  bgColor: "green5000",
  color: "01Primary0",
  height: "40px",
  width: "auto",
  border: "none"
};

export default Button;
