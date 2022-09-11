import React from "react";
import styled, { keyframes, css } from "styled-components";
import useSpacingProps from "../../utils/spacing-props";
import {borderRadius} from "../properties";

const GrayLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

const LoadingAnimation = css`
  animation: ${GrayLoading} 1s linear infinite alternate;
`;

export const SkeletonBox = styled.div`
  width: ${props=> props.$width};
  height: ${props=> props.$height};
  margin-bottom: 0.25rem;
  border-radius: 0.125rem;
  ${LoadingAnimation}
  ${useSpacingProps}
  ${borderRadius}
`;

export const SkeletonCircle = styled.img`
  width: ${props=> props.$size};
  height: ${props=> props.$size};
  object-fit: cover;
  border-radius: 100%;
  margin-right: 1rem;
  flex-shrink: 0;
  ${LoadingAnimation}
  ${useSpacingProps}
`;


SkeletonCircle.defaultProps = {
  $size: "50px"
};

SkeletonBox.defaultProps = {
  $width: "100%",
  $height: "0.5rem"
};
