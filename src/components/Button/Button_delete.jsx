import React from "react";
import styled, { css } from "styled-components";
import useSpacingProps from "../../utils/spacing-props";

const Button = styled(({ link, children, ...props }) => (
  <button
    type="button"
    to={link}
    {...props}
  >
    {children}
  </button>
))`
  ${useSpacingProps}
  cursor: pointer;
  width: ${(props) => props.width};
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};

  ${({ fontSize }) => fontSize && `
    font-size: ${fontSize};
  `};

  ${({ size, leftIcon, rightIcon }) => (size === "lg") && `
    padding: ${(leftIcon || rightIcon) ? "1.325em 1.4em" : "1.2em 1.3em"};
  `};

  ${({ size, leftIcon, rightIcon }) => (size === "md") && `
    padding: ${(leftIcon || rightIcon) ? "0.725em 1em" : "0.8em 1em"};
  `};

  ${({ size, leftIcon, rightIcon }) => (size === "sm") && `
    padding: ${(leftIcon || rightIcon) ? "0.525em 0.6em" : "0.6em 0.6em"};
  `};

  ${({ size, leftIcon, rightIcon }) => (size === "xs") && `
    padding: ${(leftIcon || rightIcon) ? "0.425em 0.45em" : "0.5em 0.5em"};
  `};

  ${({ noWrap }) =>
    noWrap && css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

Button.defaultProps = {
  noWrap: false,
  borderRadius: "0.5em",
  border: "none",
  bgColor: "#5159c9",
  color: "#FFFFFF",
  size: "md",
};

export default Button;
