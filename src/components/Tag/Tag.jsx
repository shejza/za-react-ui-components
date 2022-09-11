import React from "react";
import styled from "styled-components";
import { bgColor, color, borderColor, widthFull, bold, borderRadius, heightSize, padding } from "../properties";


const Tag = ({ children, ...props }) => <Container {...props}>{children}</Container>;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 7px 0;
  margin-right: 10px;
  padding: 3px 7px;
  background: ${({theme})=> theme.colors.tertiary0};
  border: 1px solid ${({theme})=> theme.colors.secondary100}; 
  box-sizing: border-box;
  border-radius: 4px;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  white-space: nowrap;
  ${bgColor}
  ${color}
  ${borderColor}
  ${widthFull}
  ${bold}
  ${borderRadius}
  ${heightSize}
  ${padding}
`;

Tag.defaultProps = {
  color: "secondary400"
};
export default Tag;
