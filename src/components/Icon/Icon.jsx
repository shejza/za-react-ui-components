import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useSpacingProps from "../../utils/spacing-props";
import { color } from "../properties";
import { allAvailableIcons } from './allAvailableIcons';


console.log( Object.keys(allAvailableIcons))
export const iconNames = Object.keys(allAvailableIcons);
const Icon = styled(({ spacing, icon, width, height, color, className, onClick }) => {
  const Icon = allAvailableIcons[icon];

  if(!Icon){
    throw `Missing icon named: "${icon}", please check your version of ui-components`;
  }

  return <Icon onClick={onClick} spacing={spacing} width={width} color={color} className={className} />;
})`
  ${useSpacingProps}
  ${color}

  ${({ width, height }) =>
    width &&
    `
      width: ${width};
      height: ${height};
    `}
`;

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(allAvailableIcons)).isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
};

Icon.defaultProps = {
  width: "24px",
  height: "auto",
  color: "inherit",
};

export default Icon;
