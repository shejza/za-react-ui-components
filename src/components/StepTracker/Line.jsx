import styled from "styled-components";

const LineState = ({ theme, isLineNextActive, hasNextLineError, isLast, hasPending}) => {

  let lineColor = theme.colors.tertiary100;
  const isErrorOrPending = hasPending ? '#FBEECF' : "#F5A6A6";
  lineColor = isLineNextActive ? (hasNextLineError ? isErrorOrPending : "#AFE4B8") : lineColor;
  lineColor = isLast ? theme.colors.tertiary0 : lineColor;

  return `
    background-Color: ${lineColor};
  `;
};

const Line = styled.div`
  position: relative;
  height: 6px;
  width: 100%;
  ${LineState}
`;

export default Line;
