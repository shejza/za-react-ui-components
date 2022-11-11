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
import Icon from "../Icon/Icon";

const COLORS_BY_TYPE = {
  success: "green100",
  danger: "red100",
  info: "blue100",
  warning: "orange100",
};

const COLORS_TEXT_BY_TYPE = {
  success: "green900",
  danger: "red900",
  info: "blue900",
  warning: "orange900",
};

const ICONS_BY_TYPE = {
  success: "MdCheckCircleOutline",
  danger: "MdOutlineDangerous",
  info: "MdOutlineInfo",
  warning: "MdWarningAmber",
};

const Alert = ({
  id,
  position,
  content,
  onClick,
  type,
  dismissTime,
  iconColor,
  iconWidth,
  messageFontSize,
  messageTextAlign,
  messageMargin,
  messagePadding,
  messageColor,
  messageFontWeight,
  buttonMargin,
  buttonPadding,
  buttonColor,
  buttonBackground,
  buttonFontWeight,
  buttonFontSize,
  buttonBorder,
  buttonContent,
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
      {icon && <StyledIcon width={iconWidth} icon={icon} iconColor={iconColor} />}
      <Message
        messageTextAlign={messageTextAlign}
        messageFontSize={messageFontSize}
        messageMargin={messageMargin}
        messagePadding={messagePadding}
        messageColor={messageColor}
        messageFontWeight={messageFontWeight}
      >
        {content}
      </Message>

      <ButtonRight
        buttonMargin={buttonMargin}
        buttonPadding={buttonPadding}
        buttonColor={buttonColor}
        buttonBackground={buttonBackground}
        buttonFontWeight={buttonFontWeight}
        buttonFontSize={buttonFontSize}
        buttonBorder={buttonBorder}
        onClick={_onClick}
      >
        {buttonContent}
      </ButtonRight>
    </Container>
  );
};

const Container = styled.div`
  ${positionProp}
  ${({ theme, $type }) => $type && `background-color:  ${theme.colors[COLORS_BY_TYPE[$type]] || $type}`};
  ${({ theme, $type }) => $type && `color:  ${theme.colors[COLORS_TEXT_BY_TYPE[$type]] || $type}`};
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
`;
const Message = styled.div`
  ${({ messageTextAlign }) => messageTextAlign && `text-align:  ${messageTextAlign}`};
  ${({ messageFontSize }) => messageFontSize && `font-size:  ${messageFontSize}`};
  ${({ messageMargin }) => messageMargin && `margin:  ${messageMargin}`};
  ${({ messagePadding }) => messagePadding && `padding:  ${messagePadding}`};
  ${({ messageColor }) => messageColor && `color:  ${messageColor}`};
  ${({ messageFontWeight }) => messageFontWeight && `font-weight:  ${messageFontWeight}`};
`;

const StyledIcon = styled(Icon)`
  ${({ iconWidth }) => iconWidth && `width:  ${iconWidth}`};
  ${({ iconColor }) => iconColor && `color:  ${iconColor}`};
`;

const ButtonRight = styled.button`
  cursor: pointer;
  ${({ buttonMargin }) => buttonMargin && `margin:  ${buttonMargin}`};
  ${({ buttonPadding }) => buttonPadding && `padding:  ${buttonPadding}`};
  ${({ buttonColor }) => buttonColor && `color:  ${buttonColor}`};
  ${({ buttonBackground }) => buttonBackground && `background:  ${buttonBackground}`};
  ${({ buttonFontWeight }) => buttonFontWeight && `font-weight:  ${buttonFontWeight}`};
  ${({ buttonFontSize }) => buttonFontSize && `font-size:  ${buttonFontSize}`};
  ${({ buttonBorder }) => buttonBorder && `border:  ${buttonBorder}`};
`;

Alert.propTypes = {
  backgroundColor: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
  position: PropTypes.string,
};

Alert.defaultProps = {
  width: "768px",
  height: "32px",
  padding: "8px 16px 8px 16px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  iconWidth: "20px",
  messageFontSize: "14px",
  buttonBackground: "transparent",
  buttonBorder: "none",
  buttonMargin: "0 0 0 auto",
  transition: "transform 0.3s ease-in-out",
  buttonContent: "x"
};

export default Alert;
