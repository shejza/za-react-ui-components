import styled from "styled-components";

const CircleState = ({ index, theme, full, big, first, error, isLast, currentCircle, checkIcon, xIcon, ongoing }) => {
  const showX = full && big ? xIcon : " ";
  const errorFull = big ? theme.colors.tertiary0 : theme.colors.destructive500;
  const content = error ? showX : full && big && !ongoing ? checkIcon : " ";
  const bgColor = error ? errorFull : full && !ongoing ? theme.colors.success500 : theme.colors.tertiary0;
  const borderColor = error ? theme.colors.destructive500 : full ? theme.colors.success500 : theme.colors.tertiary300;
  const size = big ? "20px" : "8px";

  const iconBgColor =  (currentCircle === index && !isLast && !first) ? "white" : bgColor;

  return `
    z-index: ${index};
    text-align: center;
    border-radius: 50%;
    border: 2px solid ${borderColor};
    background-Color: ${iconBgColor};
    width: ${size};
    height: ${size};
    position: relative;

    &::Before{
      display: block;
      content: ".";
      background: url('${content}') no-repeat center 48%;
      color: transparent;
      font-size: 10px;
      display: grid;
      place-items: center;
      line-height: 2.1;
    }
  `;
};

const Circle = styled.div`
  position: relative;
  ${CircleState}
`;

export default Circle;
