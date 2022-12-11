import React, { useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import ImagePlaceholder from "../../assets/placeholders/photo.png";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Box from "../Box/Box";
import Button from "../Button/Button";

const Card = ({
  children,
  active,
  hideAccordion,
  disableOutsideClick,
  onToggle,
  image_url,
  title,
  subtitle,
  description,
  ...props
}) => {
  const ref = useRef();
  const [isActive, SetState] = useState(active);
  const toggle = () => {
    SetState(!isActive);
    onToggle && onToggle(!isActive);
  };
  const close = () => SetState(false);
  const iconName = isActive ? "MdKeyboardArrowUp" : "MdKeyboardArrowDown";
  //const { isDesktop, isTablet, isMobile} = useMedias();
  const iconElement = ToggleTextIcon(toggle, iconName);
  const AccordionElement = hideAccordion ? iconElement : null;

  //useClickOutsideCallback(ref, disableOutsideClick ? () => {} : close);

  return (
    <CardWrapper {...props} ref={ref}>
      <CardWrapperInside>
        <Container
          isActive={isActive}
          borderBottomRightRadius={!isActive ? "12px" : 0}
          borderBottomLeftRadius={!isActive ? "12px" : 0}
        >
          <ContainerInside>
            <WrapperShareBtn>
            <ShareButton/>
            </WrapperShareBtn>
          <StyledImage src={image_url} />
        <BottomPart>
          <TextPart>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Description>{description}</Description>
            </TextPart>
            <ButtonsPart>
              <Button bgColor={"transparent"} padding="0" color="green300" fontWeight="bold" height="auto">BUTTON </Button>
              {AccordionElement}
            </ButtonsPart>
          
            </BottomPart>
            </ContainerInside>
      
        </Container>
        {isActive && <ContainerCardsInside>{children}</ContainerCardsInside>}

      </CardWrapperInside>
    </CardWrapper>
  );
};

const ShareButton = (onClickShare, iconName, text) => (
  <WrapperTextAccordion onClick={onClickShare}>
    <Icon color="white" icon={"MdShare"}/>
  </WrapperTextAccordion>
);

const ToggleTextIcon = (toggle, iconName, text) => (
  <WrapperTextAccordion onClick={toggle}>
    {text &&
    <Text color="accent450" extraBold size="16px">
      {text}
    </Text>
    }
    <Icon color="accent450" icon={iconName} width={"21px"} />
  </WrapperTextAccordion>
);

const CardWrapper = styled.div`
  max-width: 300px;
`;  

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.colors.tertiary0};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  overflow: hidden;

  &.challenge-previous {
    padding-left: 32px;
    border-radius: 12px;
    min-height: 200px;
  }
  .success150 {
    circle,
    path {
      stroke: ${({ theme }) => theme.colors.success150};
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const WrapperTextAccordion = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.gray900};
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.gray900};
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
  margin: 0;
  line-height: 1.3;
  margin-top: 4px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray700};
  line-height: 1.3;
  margin-top: 8px;
`;

const CardWrapperInside = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.tertiary750};
  position: relative;
  z-index: 9;
`;

const ContainerInside = styled.div`
  display: flex;
  flex-direction: column;
`

const BottomPart = styled.div`
padding: 16px;
`
const TextPart = styled.div`

`
const ButtonsPart = styled.div`
  display: flex;
`
const ContainerCardsInside = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 24px 24px 38px;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-top: none;
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  min-height: 0px;
  height: auto;
  transition-duration: 300ms;
`;

const WrapperShareBtn = styled.div`
  position: absolute;
  top: 16px; 
  right: 16px;
`;

Card.defaultProps = {
  hideAccordion: true
};

export default Card;
