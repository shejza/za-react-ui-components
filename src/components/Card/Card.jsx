import React, { useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import { MainWrapper} from "../properties";

const Card = ({
  children,
  active,
  hideAccordion,
  onToggle,
  image_url,
  title,
  subtitle,
  description,
  ShareButtonList,
  borderImgTopLeftRadius,
  borderImgTopRightRadius,
  cardButtonPrimaryText,
  cardButtonPrimaryOnClick,
  cardButtonPrimaryColor,
  cardButtonPrimaryWeight,
  cardButtonPrimaryPadding,
  cardButtonPrimaryHeight,
  cardButtonPrimaryBgColor,
  cardButtonPrimaryMargin,
  cardButtonSecondaryText,
  cardButtonSecondaryOnClick,
  cardButtonSecondaryColor,
  cardButtonSecondaryWeight,
  cardButtonSecondaryPadding,
  cardButtonSecondaryHeight,
  cardButtonSecondaryBgColor,
  cardButtonSecondaryMargin,
  cardButtonsGap,
  CardHeader,
  cardHorizontal,
  flexDirection,
  cardImageHeight,
  cardImageWidth,
  cardHideExpandable,
  borderImgBottomLeftRadius,
  borderImgBottomRightRadius,
  borderBottomPartTopLeftRadius,
  borderBottomPartTopRightRadius,
  borderBottomPartBottomLeftRadius,
  borderBottomPartBottomRightRadius,
  maxWidth,
  borderDetailsPartTopLeftRadius,
  borderDetailsPartTopRightRadius,
  borderDetailsPartBottomLeftRadius,
  borderDetailsPartBottomRightRadius,
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

  const iconElement = ToggleTextIcon(toggle, iconName);
  const AccordionElement = hideAccordion ? iconElement : null;
  const cardDefault = {
    _flexDirection: flexDirection,
    _borderImgTopLeftRadius: borderImgTopLeftRadius,
    _borderImgTopRightRadius: borderImgTopRightRadius,
    _borderImgBottomLeftRadius: borderImgBottomLeftRadius,
    _borderImgBottomRightRadius: borderImgBottomRightRadius,
    _borderBottomPartTopLeftRadius: borderBottomPartTopLeftRadius,
    _borderBottomPartTopRightRadius: borderBottomPartTopRightRadius,
    _borderBottomPartBottomLeftRadius: borderBottomPartBottomLeftRadius,
    _borderBottomPartBottomRightRadius: borderBottomPartBottomRightRadius,
    _maxWidth: maxWidth,
    _borderDetailsPartTopLeftRadius: borderDetailsPartTopLeftRadius,
    _borderDetailsPartTopRightRadius: borderDetailsPartTopRightRadius,
    _borderDetailsPartBottomLeftRadius: borderDetailsPartBottomLeftRadius,
    _borderDetailsPartBottomRightRadius: borderDetailsPartBottomRightRadius,
  };

  const CONFIG = {
    cardDefault,
    cardHorizontal: {
      _flexDirection: "row",
      _borderImgTopLeftRadius: "12px",
      _borderImgTopRightRadius: "0",
      _borderImgBottomLeftRadius: "12px",
      _borderImgBottomRightRadius: "0",
      _borderBottomPartTopLeftRadius: "0",
      _borderBottomPartTopRightRadius: "12px",
      _borderBottomPartBottomLeftRadius: "0",
      _borderBottomPartBottomRightRadius: "12px",
      _maxWidth: "unset",
      _width: "100%",
      _borderDetailsPartTopLeftRadius: borderDetailsPartTopLeftRadius,
      _borderDetailsPartTopRightRadius: borderDetailsPartTopRightRadius,
      _borderDetailsPartBottomLeftRadius: borderDetailsPartBottomLeftRadius,
      _borderDetailsPartBottomRightRadius: borderDetailsPartBottomRightRadius,
    },
  };

  const {
    _flexDirection,
    _borderImgTopLeftRadius,
    _borderImgTopRightRadius,
    _borderImgBottomLeftRadius,
    _borderImgBottomRightRadius,
    _borderBottomPartTopLeftRadius,
    _borderBottomPartTopRightRadius,
    _borderBottomPartBottomLeftRadius,
    _borderBottomPartBottomRightRadius,
    _maxWidth,
    _width,
    _borderDetailsPartTopLeftRadius,
    _borderDetailsPartTopRightRadius,
    _borderDetailsPartBottomLeftRadius,
    _borderDetailsPartBottomRightRadius,
  } = CONFIG[cardHorizontal ? "cardHorizontal" : "cardDefault"];

  return (
    <MainWrapper {...props} maxWidth={_maxWidth} width={_width} ref={ref}>
      <CardWrapperInside>
        <Container
          isActive={isActive}
          borderBottomRightRadius={!isActive ? "12px" : 0}
          borderBottomLeftRadius={!isActive ? "12px" : 0}
        >
          <ContainerInside flexDirection={_flexDirection}>
            {CardHeader && <CardHeader />}
            <ButtonImageWrapper>
              {ShareButtonList && (
                <WrapperShareBtn>
                  <ShareButton ShareButtonList={ShareButtonList} />
                </WrapperShareBtn>
              )}
              <StyledImage
                src={image_url}
                borderImgTopLeftRadius={_borderImgTopLeftRadius}
                borderImgTopRightRadius={_borderImgTopRightRadius}
                borderImgBottomLeftRadius={isActive ? 0 : _borderImgBottomLeftRadius}
                borderImgBottomRightRadius={_borderImgBottomRightRadius}
                cardImageHeight={cardHorizontal ? "100%" : cardImageHeight}
                cardImageWidth={cardHorizontal ? "200px" : cardImageWidth}
              />
            </ButtonImageWrapper>
            <BottomPart
              borderBottomPartTopLeftRadius={_borderBottomPartTopLeftRadius}
              borderBottomPartTopRightRadius={_borderBottomPartTopRightRadius}
              borderBottomPartBottomLeftRadius={_borderBottomPartBottomLeftRadius}
              borderBottomPartBottomRightRadius={_borderBottomPartBottomRightRadius}
              widthBottomPart={cardHorizontal && "100%"}
            >
              <TextPart>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <Description>{description}</Description>
              </TextPart>
              <ButtonsPart gap={cardButtonsGap}>
                {cardButtonPrimaryText && (
                  <Button
                    bgColor={cardButtonPrimaryBgColor}
                    padding={cardButtonPrimaryPadding}
                    color={cardButtonPrimaryColor}
                    fontWeight={cardButtonPrimaryWeight}
                    height={cardButtonPrimaryHeight}
                    margin={cardButtonPrimaryMargin}
                    onClick={cardButtonPrimaryOnClick}
                  >
                    {cardButtonPrimaryText}
                  </Button>
                )}
                {cardButtonSecondaryText && (
                  <Button
                    bgColor={cardButtonSecondaryBgColor}
                    padding={cardButtonSecondaryPadding}
                    color={cardButtonSecondaryColor}
                    fontWeight={cardButtonSecondaryWeight}
                    height={cardButtonSecondaryHeight}
                    margin={cardButtonSecondaryMargin}
                    onClick={cardButtonSecondaryOnClick}
                  >
                    {cardButtonSecondaryText}
                  </Button>
                )}
                {!cardHideExpandable && AccordionElement}
              </ButtonsPart>
            </BottomPart>
          </ContainerInside>
        </Container>
        {isActive && (
          <ContainerCardsInside
            _borderDetailsPartTopLeftRadius={_borderDetailsPartTopLeftRadius}
            _borderDetailsPartTopRightRadius={_borderDetailsPartTopRightRadius}
            _borderDetailsPartBottomLeftRadius={_borderDetailsPartBottomLeftRadius}
            _borderDetailsPartBottomRightRadius={_borderDetailsPartBottomRightRadius}
          >
            {children}
          </ContainerCardsInside>
        )}
      </CardWrapperInside>
    </MainWrapper>
  );
};

const ShareButton = ({ ShareButtonList }) => (
  <WrapperTextAccordion>
    <Menu menuMinWidth="200px" icon="MdShare" iconColor="white">
      <ShareButtonList />
    </Menu>
  </WrapperTextAccordion>
);

const ToggleTextIcon = (toggle, iconName, text) => (
  <WrapperTextAccordion onClick={toggle}>
    {text && (
      <Text color="accent450" extraBold size="16px">
        {text}
      </Text>
    )}
    <Icon color="01Primary700" icon={iconName} width={"21px"} />
  </WrapperTextAccordion>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.colors["background"]}
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};

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
  width: ${(props) => props.cardImageWidth};
  height: ${(props) => props.cardImageHeight};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-top-left-radius: ${(props) => props.borderImgTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderImgTopRightRadius};
  border-bottom-left-radius: ${(props) => props.borderImgBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderImgBottomRightRadius};
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
  color: ${({ theme }) => theme.colors["01Primary700"]};
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors["01Primary700"]};
  margin: 0;
  line-height: 1.3;
  margin-top: 4px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors["01Primary700"]};
  line-height: 1.3;
  margin-top: 8px;
`;

const CardWrapperInside = styled.div`
  box-sizing: border-box;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors["background"]};
  position: relative;
  z-index: 9;
`;

const ContainerInside = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;
`;

const BottomPart = styled.div`
  background-color: ${({ theme }) => theme.colors["background"]};
  padding: 16px;
  width: ${(props) => props.widthBottomPart};
  border-top-left-radius: ${(props) => props.borderBottomPartTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderBottomPartTopRightRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomPartBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomPartBottomRightRadius};
`;
const TextPart = styled.div``;
const ButtonsPart = styled.div`
  display: flex;
  gap: ${(props) => props.gap};
`;
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
  border-top-left-radius: ${(props) => props.borderDetailsPartTopLeftRadius};
  border-top-right-radius: ${(props) => props.borderDetailsPartTopRightRadius};
  border-bottom-left-radius: ${(props) => props.borderDetailsPartBottomLeftRadius};
  border-bottom-right-radius: ${(props) => props.borderDetailsPartBottomRightRadius};
`;

const WrapperShareBtn = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
const ButtonImageWrapper = styled.div`
  position: relative;
`;

Card.defaultProps = {
  image_url:
    "https://images.unsplash.com/photo-1554424944-d72b391975b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  title: "Title goes here",
  subtitle: "Subtitle goes here",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  hideAccordion: true,
  maxWidth: "300px",
  borderImgTopLeftRadius: "12px",
  borderImgTopRightRadius: "12px",
  borderImgBottomLeftRadius: "0",
  borderImgBottomRightRadius: "0",
  borderBottomPartTopLeftRadius: "16px",
  borderBottomPartTopRightRadius: "16px",
  borderBottomPartBottomLeftRadius: "16px",
  borderBottomPartBottomRightRadius: "16px",
  cardButtonPrimaryText: "BUTTON",
  cardButtonPrimaryOnClick: () => alert("Button clicked!"),
  cardButtonPrimaryColor: "green300",
  cardButtonPrimaryBgColor: "transparent",
  cardButtonPrimaryWeight: "bold",
  cardButtonPrimaryPadding: "0",
  cardButtonPrimaryHeight: "auto",
  cardButtonSecondaryText: "BUTTON 2",
  cardButtonSecondaryOnClick: () => alert("Button 2 clicked!"),
  cardButtonSecondaryColor: "green300",
  cardButtonSecondaryBgColor: "transparent",
  cardButtonSecondaryWeight: "bold",
  cardButtonSecondaryPadding: "0",
  cardButtonSecondaryHeight: "auto",
  cardButtonsGap: "8px",
  flexDirection: "column",
  cardImageHeight: "200px",
  cardImageWidth: "100%",
  borderDetailsPartTopLeftRadius: "16px",
  borderDetailsPartTopRightRadius: "16px",
  borderDetailsPartBottomLeftRadius: "16px",
  borderDetailsPartBottomRightRadius: "16px",
};

export default Card;
