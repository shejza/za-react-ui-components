import { keyframes, css } from "styled-components";

const FromRight = keyframes`
  from {
    transform: translateX(100%);

  }
  to {
    transform: translateX(0);
  }
`;

const FromLeft = keyframes`
  from {
    transform: translateX(-100%);

  }
  to {
    transform: translateX(0);
  }
`;

const FromBottom = keyframes`
  from {
    bottom: -10px;
    
  }
  to {
    bottom: 12px;
  }
`;

const TopRight = css`
  top: 12px;
  right: -12px;
  transition: transform 0.6s ease-in-out;
  animation: ${FromRight} 0.7s;
`;

const BottomRight = css`
  bottom: 12px;
  right: -12px;
  transition: transform 0.6s ease-in-out;
  animation: ${FromRight} 0.7s;
`;

const TopLeft = css`
  top: 12px;
  left: 12px;
  transition: transform 0.6s ease-in;
  animation: ${FromLeft} 0.7s;
`;

const BottomLeft = css`
  bottom: 12px;
  left: 12px;
  transition: transform 0.6s ease-in;
  animation: ${FromLeft} 0.7s;
`;

const Center = css`
  bottom: -10px;
  left: 367px;
  width: calc(100% - 430px);
  transition: transform 0.6s ease-in;
  animation: ${FromLeft} 0.7s;
`;

const BottomCenter = css`
  bottom: 12px;
  left: 50%;
  transform: translate(-50%, 0);


  transition: transform 0.6s ease-in;
  animation: ${FromBottom} 0.7s;
`;


export const POSITIONS = {
    "top-right": TopRight,
    "top-left": TopLeft,
    "bottom-left": BottomLeft,
    "bottom-right": BottomRight,
    "center": Center,
    "bottom-center": BottomCenter
};

export const positionProp = ({ position }) => position && POSITIONS[position];

