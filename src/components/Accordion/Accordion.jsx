import React, { useRef, useState } from "react";
import styled from "styled-components";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import { breakpoints } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  white-space: nowrap;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary500};
  
  justify-content: unset;
  &::after {
    content: '';
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary200};
    display: flex;
    align-items: center;
    margin: auto 0;
    padding-bottom: 3px;
    @media ${breakpoints.mobile} {
      margin-right: 16px;
    }
    ${({ hideLine })=> hideLine && `
    border: none;
    width: 0`};
  } 
`;
const IconWrapper = styled.div`
  margin: -1px 28px 0 17px;
`;
const StyledTitle = styled(Text)`
  @media ${breakpoints.mobile} {
    margin-left: 16px;
  }
`;
const Accordion = ({ title, children, hideIcon, hideLine, disableOutsideClick,  active, ...props }) => {
  const ref = useRef();
  const [isActive, SetState] = useState(active);
  const toggle = () => SetState(!isActive);
  const close = () => SetState(false);
  const iconName = isActive ? "chevron-up" : "chevron-down";
  const iconElement = hideIcon ? null : <IconSvg width="20px" color="secondary500" icon={iconName} />;

  useClickOutsideCallback(ref, disableOutsideClick ? ()=>{} : close);
  
  return (
    <div {...props} ref={ref}>
      <Container className='accordion-title' hideLine={hideLine} onClick={toggle}>
        <StyledTitle>
          {title}
        </StyledTitle>
        {(!hideIcon || !hideLine) && <IconWrapper>
          {iconElement}
        </IconWrapper>}
      </Container>
      {isActive && children}
    </div>
  );
};

Accordion.defaultProps = {
  active: false,
  hideIcon: false,
};

export default Accordion;
