import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import IconSvg from "../IconSvg/IconSvg";
import useSpacingProps from "../../utils/spacing-props";
import useButtonVariations from "../../utils/buttonVariations";
import widthProps from "../../utils/width-props";
import Loader from "../Loader/Loader";
import {
  alignItems,
  alignSelf,
  animation,
  backgroundFilter,
  background,

  bgColor,
  color,
  fontWeight,
  grow,
  float,
  borderRadius,
  borderColor,
  maxWidth,
  widthFull,
  heightSize,
  fontFamily,
  borderWidth,
  disablePointerEvents
} from "../properties";
import fontWeigthProps from "../../utils/fontWeightProps";
import useTypography from "../../utils/typography";

const SIZE_CONFIG = {
  lg: { padding: "19px 39px 19px 39px;", fontSize: "16px" },
  md: { padding: "9px 16px 9px 16px", fontSize: "14px" },
};

export const TYPE_CONFIG = ["text", "outline", "solid"];

const Button = styled(({
  children,
  leftIcon,
  rightIcon,
  loading,
  disablePointerEvents: dpe,
  color,
  iconWidth = "16px",
  ...props
}) => {
  let content;
  const [width, setWidth] = useState();
  const ref = useRef();
  const style = loading ? {width} : null;

  if (loading) {
    content = <Loader $color={color} $size="18px" />;
  } else {
    content = (
      <>
        {leftIcon && <IconSvg width={iconWidth}  icon={leftIcon} spacing="mr-2" />}

        {children}

        {rightIcon && <IconSvg width={iconWidth} icon={rightIcon} spacing="ml-2" />}
      </>
    );
  }

  useEffect(() => {
    if (ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width+ "px");
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
  ${animation}
  ${backgroundFilter}
  ${background}
  ${bgColor}
  
  ${useSpacingProps}
  ${widthProps}
  ${useTypography}
  display: flex;
  flex-direction: row;
  justify-content: center;
 
  border-width: 0px;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  line-height: 1.5em;
  font-family: 'Proxima Nova';

  ${useButtonVariations}

  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}


  ${color}
  ${fontWeight}
  ${grow}
  ${float}
  ${borderRadius}
  ${borderColor}
  ${maxWidth}
  ${widthFull}
  ${heightSize}
  ${fontFamily}
  ${borderWidth}
  ${disablePointerEvents}

  ${({ size }) =>
    size &&
    `
    padding: ${SIZE_CONFIG[size].padding};
    font-size: ${SIZE_CONFIG[size].fontSize};
  `}

  ${fontWeigthProps}

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
  kind: propTypes.oneOf(TYPE_CONFIG),
  /** Spacing property (see Layout component) */
  spacing: propTypes.string,
  /** Func to execute on click */
  onClick: propTypes.func,
  /** Name of icon to go on the right of button content */
  rightIcon: propTypes.string,
  /** Name of icon to go on the left of button content */
  leftIcon: propTypes.string,
  /** Sets a min-width of 100px */
  minWidth: propTypes.bool,
  widthFull: propTypes.bool,
  heightSize: propTypes.string,
  /** Prevent wrapping lines & truncate with ... */
  noWrap: propTypes.bool,
  /** Button sizes */
  size: propTypes.oneOf(["md", "lg"]),
  grow: propTypes.number
};

Button.defaultProps = {
  kind: "solid",
  variant: "primary500",
  size: "md",
  bgColor: "#54C1A1"
};

export default Button;
