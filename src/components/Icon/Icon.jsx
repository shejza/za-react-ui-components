import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../properties";
import { allAvailableIcons } from './allAvailableIcons';

export const iconNames = Object.keys(allAvailableIcons);
const Icon = styled(({ icon, width, height, color, className, onClick }) => {
  const Icon = allAvailableIcons[icon];

  if(!Icon){
    throw `Missing icon named: "${icon}", please check your version of ui-components`;
  }

  return <Icon onClick={onClick} width={width} color={color} className={className} />;
})`
 
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
