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

Box.defaultProps = {
  color: "01Primary700",
  bgColor: "01Primary100"
};

export default Box;
