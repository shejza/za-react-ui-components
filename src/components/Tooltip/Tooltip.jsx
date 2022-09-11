import React from "react";
import styled from "styled-components";
import { bgColor, transform } from "../properties";
import Link from "../Link/Link";

const Tooltip = ({
  bgColor,
  children,
  message,
  direction,
  top,
  right,
  bottom,
  left,
  borderWidth,
  wrapperTop,
  wrapperRight,
  wrapperBottom,
  wrapperLeft,
  $minWidth,
  $textAlign,
  transform,
  arrowPosition,
  text,
  href,
  ...props
}) => {
  let Kontainer = React.Fragment;
  let MessageKlass = React.Fragment;

  if(message){
    Kontainer = Container;
    MessageKlass = Message;
  }
  return (
    <Kontainer {...props}>
      {children}
      <MessageKlass
        transform={transform}
        bgColor={bgColor}
        direction={direction}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        borderWidth={borderWidth}
        wrapperTop={wrapperTop}
        wrapperRight={wrapperRight}
        wrapperBottom={wrapperBottom}
        wrapperLeft={wrapperLeft}
        $minWidth={$minWidth}
        $textAlign={$textAlign}
        arrowPosition={arrowPosition}
      >
        {message}
        {text && (
          <Link color="accent400" fontWeight="700" href={"/" + href}>
            {text}
          </Link>
        )}
      </MessageKlass>
    </Kontainer>
  );
};

const BORDERARROW = {
  top: "0",
  bottom: "-1px",
  right: "-1px",
  left: "1px",
};

const Message = styled.span`
  visibility: hidden;
  display: none;
  position: absolute;
  ${bgColor}
  color: ${({ theme }) => theme.colors.secondary400};
  border-radius: 8px;
  z-index: 9;
  opacity: 0;
  transition: opacity 0.6s;
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`};
  ${({ $textAlign }) => $textAlign && `text-align: ${$textAlign};`};
  padding: 20px;
  font-size: 14px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
	border: 1px solid ${({ theme }) => theme.colors["secondary100"]};
  ${({ direction }) => DIRECTIONS[direction]}
  ${({ wrapperTop }) => wrapperTop && `top: ${wrapperTop};`}
  ${({ wrapperRight }) => wrapperRight && `right: ${wrapperRight};`}
  ${({ wrapperBottom }) => wrapperBottom && `bottom: ${wrapperBottom};`}
  ${({ wrapperLeft }) => wrapperLeft && `left: ${wrapperLeft};`}
	${transform}
  transition: 0.8s;
  &::before{
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 5px;
    ${({ direction, bgColor, theme }) => (bgColor ? getArrow(direction, theme.colors.secondary100) : ARROWS[direction])}
		${({ arrowPosition, direction }) => direction && getArrowPosition(direction, arrowPosition, BORDERARROW[direction])}

  }
  &::after{
    content: " ";
    position: absolute;
    border-style: solid;
    border-width: 5px;
    ${({ direction, bgColor, theme }) =>
      bgColor ? getArrow(direction, theme.colors[bgColor] || bgColor) : ARROWS[direction]}
		${({ arrowPosition, direction }) => arrowPosition && getArrowPosition(direction, arrowPosition)}
    ${({ top }) => top && `top: ${top};`}
    ${({ right }) => right && `right: ${right};`}
    ${({ bottom }) => bottom && `bottom: ${bottom};`}
    ${({ left }) => left && `left: ${left};`}
    ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${Message} {
    display: initial;
    visibility: visible;
    opacity: 1;
  }
`;

export const DIRECTIONS = {
  right: "top: 50%; right: -10px; transform: translate(100%, -50%);",
  left: "top: 50%; left: -10px; transform: translate(-100%, -50%);",
  bottom: "top: 135%; left: 50%; transform: translate(-50%);",
  top: "bottom: 125%; left: 50%; transform: translate(-50%);",
};

const ARROWS = {
  top: "top: 100%; left: 50%; transform: translate(-50%, -6%);border-color: black transparent transparent transparent;",
  bottom:
    "bottom: 100%; left: 50%; transform: translate(-50%, -6%); border-color: transparent transparent black transparent;",
  right:
    "top: 50%; right: 100%; transform: translate(0, -50%);  border-color: transparent black transparent transparent;",
  left: "top: 50%; left: 100%;  transform: translate(0, -50%); border-color: transparent transparent transparent black;",
};

const getArrowPosition = (direction, arrowPosition, borderBack) => {
  switch (direction) {
    case "right":
      return `top: ${arrowPosition}; right: 100%; transform: translate(${borderBack ? "-1px" : "0"}, -${
        arrowPosition ? arrowPosition : "50%"
      });`;
    case "left":
      return `top: ${arrowPosition}; left: 100%; transform: translate(${borderBack ? "1px" : "0"}, -${
        arrowPosition ? arrowPosition : "50%"
      });`;
    case "top":
      return `top: 100%; left: ${arrowPosition}; transform: translate(-${arrowPosition ? arrowPosition : "50%"}, ${
        borderBack ? "0" : "-6%"
      });`;
    case "bottom":
      return `bottom: 100%; left: ${arrowPosition};  transform: translate(-${arrowPosition ? arrowPosition : "50%"},  ${
        borderBack ? "-1px" : "-6%"
      });`;
    default:
      return;
  }
};

const getArrow = (direction, color) => ARROWS[direction].replace("black", color);

Tooltip.defaultProps = {
  direction: "right",
  bgColor: "tertiary0",
};

Tooltip.Message = Message;

export default Tooltip;
