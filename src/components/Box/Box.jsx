import React from "react";
import styled from "styled-components";
import { MainWrapper } from "../properties";


const Box = styled(
  React.forwardRef(({ children, className, ...props }, ref) => (
    <MainWrapper className={className} ref={ref} {...props}>
      {children}
    </MainWrapper>
  ))
)`
`;

export default Box;
