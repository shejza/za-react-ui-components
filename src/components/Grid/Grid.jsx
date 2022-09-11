import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import useHeightProps from "../../utils/height-props";
import {
  alignContent,
  alignItems,
  columnGap,
  columns,
  gap,
  gridColumn,
  justifyContent,
  justifyItems,
  rowGrap,
  rows,
  template,
  textAlign,
  pointer,
  bgColor,
  borderRadius,
} from "../properties";

const StyledGrid = styled.div`
  ${useSpacingProps}
  ${useWidthProps}
  ${useHeightProps}

  display: grid;

  ${pointer}
  ${justifyContent}
  ${justifyItems}
  ${textAlign}
  ${alignContent}
  ${alignItems}
  ${columns}
  ${rows}
  ${template}
  ${gap}
  ${rowGrap}
  ${columnGap}
  ${gridColumn}
  ${bgColor}
  ${borderRadius}
`;

const Grid = ({ children, ...props }) => <StyledGrid {...props}>{children}</StyledGrid>;

Grid.propTypes = {
  columns: PropTypes.string,
  rows: PropTypes.string,
  gap: PropTypes.string,
  rowGrap: PropTypes.string,
  columnGap: PropTypes.string,
};

export default Grid;
