import React from "react";
import styled, { css, keyframes } from "styled-components";
import Icon from "../Icon/Icon";

const Rotate = keyframes` 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } `;
const Animation = css`
  animation: ${Rotate} 2s linear infinite;
`;

const Loader = ({$center, $size, $color, icon}) => {
  return (
    <StyledIcon color={$color} width={$size} icon={icon} $center={$center} />
  );
};

const StyledIcon = styled(Icon)`
  position: relative;
  ${({$center})=> $center && "margin: 0 auto;"}
  ${Animation};
`;

Loader.defaultProps = {
  $size: "20px",
  $color: "primary700",
  icon: "BiLoader"
};

export default Loader;
