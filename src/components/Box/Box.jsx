import React from "react";
import styled, { css } from "styled-components";
import propTypes from "prop-types";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import useHeightProps from "../../utils/height-props";
import useDiplayProps from "../../utils/display-props";
import {
  alignItems,
  bgColor,
  borderRadius,
  color,
  direction,
  disablePointerEvents,
  gridColumn,
  grow,
  justifyContent,
  justifySelf,
  pointer,
  relative,
  shrink,
  textAlign,
  wrap,
  hoverUnderline,
  leaf,
  gap,
} from "../properties";

const Box = styled(
  React.forwardRef(({ children, className, bgColor, borderRadius, alignItems, justifyContent, ...props }, ref) => (
    <div className={className} ref={ref} {...props}>
      {children}
    </div>
  ))
)`
  flex-wrap: nowrap;
  position: static;
  color: inherit;
  align-items: stretch;

  ${useSpacingProps}
  ${useWidthProps}
  ${useHeightProps}
  ${useDiplayProps}

  ${gridColumn}
  ${pointer}
  ${alignItems}
  ${justifyContent}
  ${justifySelf}
  ${wrap}
  ${shrink}
  ${direction}
  ${relative}
  ${borderRadius}
  ${bgColor}
  ${grow}
  ${gap}

  ${color}
  ${textAlign}
  ${disablePointerEvents}
  ${hoverUnderline}
  ${leaf}
`;

Box.propTypes = {
  spacing: propTypes.string,
  /** Width for the component in % */
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  /** Width for the component on md (medium) breakpoint and UP in % */
  mdWidth: propTypes.oneOfType([propTypes.number, propTypes.string]),
  /** Width for the component on lg (large) breakpoint and UP in % */
  lgWidth: propTypes.oneOfType([propTypes.number, propTypes.string]),
  /** Width for the component in % */
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  /** Width for the component on md (medium) breakpoint and UP in % */
  mdHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  /** Width for the component on lg (large) breakpoint and UP in % */
  lgHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  /** Set value of CSS align-items property */
  alignItems: propTypes.string,
  /** Set value of CSS justify-content property */
  justifyContent: propTypes.string,
  /** Set HEX code for background color (use colors from constants.js) */
  bgColor: propTypes.string,
  /** Set flex-wrap or not */
  wrap: propTypes.bool,
  /** Value for flex-shrink */
  shrink: propTypes.number,
  /** Value for flex-direction */
  direction: propTypes.string,
  /** Set Sets flex-direction to column on mobile breakpoints */
  stackOnMobile: propTypes.bool,
  /** Set position: relative  */
  relative: propTypes.bool,
  /** Set text-align or not  */
  textAlign: propTypes.string,
};

Box.defaultProps = {};

const Panel = styled(Box)`
  background: ${({ bgColor }) => bgColor};
  box-sizing: border-box;
  ${({ shadows }) =>
    shadows &&
    `
    border: 1px solid ${({ theme }) => theme.colors.secondary100};
    box-shadow: 0px 3px 8px rgba(31, 32, 41, 0.08);
  `}
`;

Panel.defaultProps = {
  bgColor: "#FFFFFF",
  borderRadius: "1.5em",
};

export { Panel };

export default Box;
