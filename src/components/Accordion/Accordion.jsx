import React, { useRef, useState } from "react";
import styled from "styled-components";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Icon from "../Icon/Icon";
import { MainWrapper } from "../properties";
import { Container } from "./ContainerTitleProps";

const Accordion = ({ title, children, hideIcon, disableOutsideClick, active, icon, ...props }) => {
  const ref = useRef();

  const [isActive, SetState] = useState(active);
  const toggle = () => SetState(!isActive);
  const close = () => SetState(false);
  const iconElement = hideIcon ? null : (
    <ArrowIcon transformIcon={isActive && "rotate(-180deg)"} {...props} icon={icon} />
  );

  useClickOutsideCallback(ref, disableOutsideClick ? () => {} : close);

  return (
    <MainWrapper {...props} ref={ref}>
      <Container {...props} bgColorTitleContainer={"01Primary50"} borderRadiusTitleContainer={isActive ? "12px 12px 0 0" : "12px"} onClick={toggle}>
        <Title {...props}>{title}</Title>
        {!hideIcon && <>{iconElement}</>}
      </Container>
      {isActive && <Description {...props}>{children}</Description>}
    </MainWrapper>
  );
};



const Title = styled.h1`
  ${({ backgroundTitle }) => backgroundTitle && `background:  ${backgroundTitle}`};
  ${({ borderTitle }) => borderTitle && `border:  ${borderTitle}`};
  ${({ borderRadiusTitle }) => borderRadiusTitle && `border-radius:  ${borderRadiusTitle}`};
  ${({ colorTitle, theme }) => colorTitle && `color:  ${theme.colors[colorTitle]}`};
  ${({ displayTitle }) => displayTitle && `display:  ${displayTitle}`};
  ${({ fontFamilyTitle }) => fontFamilyTitle && ` font-family::  ${fontFamilyTitle}`};
  ${({ fontSizeTitle }) => fontSizeTitle && `font-size:  ${fontSizeTitle}`};
  ${({ fontWeightTitle }) => fontWeightTitle && `font-weight: ${fontWeightTitle}`};
  ${({ paddingTitle }) => paddingTitle && `padding: ${paddingTitle}`};
  ${({ marginTitle }) => marginTitle && `margin: ${marginTitle}`};
`;

const Description = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  ${({ backgroundDescription, theme }) => backgroundDescription && `background:  ${theme.colors[backgroundDescription]}`};
  ${({ borderDescription }) => borderDescription && `border:  ${borderDescription}`};
  ${({ borderRadiusDescription }) => borderRadiusDescription && `border-radius:  ${borderRadiusDescription}`};
  ${({ colorDescription, theme }) => colorDescription && `color:  ${theme.colors[colorDescription]}`};
  ${({ displayDescription }) => displayDescription && `display:  ${displayDescription}`};
  ${({ fontFamilyDescription }) => fontFamilyDescription && ` font-family::  ${fontFamilyDescription}`};
  ${({ fontSizeDescription }) => fontSizeDescription && `font-size:  ${fontSizeDescription}`};
  ${({ fontWeightDescription }) => fontWeightDescription && `font-weight: ${fontWeightDescription}`};
  ${({ paddingDescription }) => paddingDescription && `padding: ${paddingDescription}`};
  ${({ marginDescription }) => marginDescription && `margin: ${marginDescription}`};
`;

const ArrowIcon = styled(Icon)`
  ${({ transformIcon }) => transformIcon && `transform:  ${transformIcon}`};
  ${({ iconWidth }) => iconWidth && `width:  ${iconWidth}`};
  ${({ iconColor, theme }) => iconColor && `color:  ${theme.colors[iconColor]}`};
  path {
    color: ${({ iconColor, theme }) => iconColor && `${theme.colors[iconColor]}`};
  }
`;
Accordion.defaultProps = {
  active: false,
  hideIcon: false,
  borderRadius: "8px",
  borderRadiusTitleContainer: "8px",
  paddingTitleContainer: "16px",
  alignItemsTitleContainer: "center",
  flexDirectionTitleContainer: "row",
  justifyContentTitleContainer: "space-between",
  displayTitleContainer: "flex",
  cursor: "pointer",
  paddingDescription: "16px",
  fontWeightTitle: 700,
  fontSizeTitle: "18px",
  colorTitle: "01Primary700",
  iconWidth: "20px",
  iconColor: "01Primary700",
  icon: "MdKeyboardArrowDown",
  bgColor: "accordion",
  backgroundDescription: "01Primary100",
  colorDescription: "01Primary700"
};

export default Accordion;
