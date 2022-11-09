import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { positionProp } from "./common";
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

const COLORS_BY_TYPE = {
  success: "green100",
  danger: "red100",
  info: "blue100",
  warning: "orange100",
};

const ICONS_BY_TYPE = {
  success: "success-check",
  danger: "remove-danger",
};

const Alert = ({
  id,
  position,
  content,
  onClick,
  type,
  dismissTime,
  btnText,
  btnDetailsLink,
  btnBgColor,
  colorBtn,
  ...props
}) => {
  const icon = ICONS_BY_TYPE[type];
  const _onClick = () => onClick(id);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dismissTime) {
        onClick(id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
  }, [dismissTime, id, onClick]);

 
  return (
    <Container position={position} $type={type} {...props}>
      {/*{icon && <IconSvg width="21px" icon= {icon} />}*/}
      {/*<Message>{content}</Message>*/}

      {/*<Button  onClick={_onClick}>
        <IconSvg width="12px" icon="x"  color="tertiary0"/>
      </Button>*/}
    </Container>
  );
};

const Container = styled.div`
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


 
  ${({ theme, $type }) => $type && `background-color:  ${theme.colors[COLORS_BY_TYPE[$type]] || $type}`};
  ${positionProp}
`;
const Message = styled.div`
  flex: 1;
  margin: 0;
  text-align: left;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors["white"]};
`;

Alert.propTypes = {
  backgroundColor: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.string,
};

Alert.defaultProps = {
  btnBgColor: "rgb(253, 237, 237)",
  colorBtn: "#fff",
  width: "768px",
  height: "48px",
  padding: "8px 16px",
  borderRadius: "4px",
};

export default Alert;
