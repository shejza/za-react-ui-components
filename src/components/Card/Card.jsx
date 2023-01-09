import React, { useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import ImagePlaceholder from "../../assets/placeholders/photo.png";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Menu from "../Menu/Menu";
import {
  alignItems,
  alignSelf,
  alignContent,
  animation,
  backdropFilter,
  background,
  bgColor,
  border,
  borderBottom,
  borderTop,
  borderLeft,
  borderRight,
  borderColor,
  borderWidth,
  borderRadius,
  bottom,
  boxShadow,
  boxSizing,
  clip,
  color,
  cursor,
  columnGap,
  display,
  filter,
  float,
  font,
  fontFamily,
  fontSize,
  fontStyle,
  fontVariant,
  fontWeight,
  flexWrap,
  flexShrink,
  flexDirection,
  flexGrow,
  gridColumn,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplate,
  gap,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  listStyle,
  listStyleImage,
  listStylePosition,
  listStyleType,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  outline,
  outlineColor,
  outlineWidth,
  overflow,
  overflowX,
  overflowY,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  pageBreakAfter,
  pageBreakBefore,
  pageBreakInside,
  pointerEvents,
  position,
  quotes,
  rowGap,
  resize,
  right,
  tabSize,
  tableLayout,
  textAlign,
  textDecoration,
  textIndent,
  textJustify,
  textOverflow,
  textShadow,
  textTransform,
  top,
  transform,
  transformOrigin,
  transformStyle,
  transition,
  verticalAlign,
  visibility,
  whiteSpace,
  width,
  wordBreak,
  wordSpacing,
  wordWrap,
  zIndex,
} from "../properties";

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
  cardMaxWidth,
  cardHideExpandable,
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
    <CardWrapper cardMaxWidth={cardHorizontal ? "100%" : cardMaxWidth}  {...props} ref={ref}>
      <CardWrapperInside>
        <Container
          isActive={isActive}
          borderBottomRightRadius={!isActive ? "12px" : 0}
          borderBottomLeftRadius={!isActive ? "12px" : 0}
        >
          <ContainerInside flexDirection={cardHorizontal ? "row" : flexDirection}>
            {CardHeader && <CardHeader/>}
            <ButtonImageWrapper>
            {ShareButtonList &&
            <WrapperShareBtn>
              <ShareButton ShareButtonList={ShareButtonList} />
            </WrapperShareBtn>
}
            <StyledImage
              src={image_url}
              borderImgTopLeftRadius={borderImgTopLeftRadius}
              borderImgTopRightRadius={borderImgTopRightRadius}
              cardImageHeight={cardHorizontal ? "100%" : cardImageHeight }
              cardImageWidth={cardHorizontal ? "200px" : cardImageWidth }
            />
             </ButtonImageWrapper>
            <BottomPart widthBottomPart={cardHorizontal && "100%"}>
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
        {isActive && <ContainerCardsInside>{children}</ContainerCardsInside>}
      </CardWrapperInside>
    </CardWrapper>
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
    <Icon color="accent450" icon={iconName} width={"21px"} />
  </WrapperTextAccordion>
);

const CardWrapper = styled.div`
  ${alignItems}
  ${alignSelf}
  ${alignContent}
  ${animation}
  ${backdropFilter}
  ${background}
  ${bgColor}
  ${border}
  ${borderBottom}
  ${borderTop}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderWidth}
  ${borderRadius}
  ${bottom}
  ${boxShadow}
  ${boxSizing}
  ${clip}
  ${color}
  ${cursor}
  ${columnGap}
  ${display}
  ${filter}
  ${float}
  ${font}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontVariant}
  ${fontWeight}
  ${flexWrap}
  ${flexShrink}
  ${flexDirection}
  ${flexGrow}
  ${gridColumn}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridTemplate}
  ${gap}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${letterSpacing}
  ${lineHeight}
  ${listStyle}
  ${listStyleImage}
  ${listStylePosition}
  ${listStyleType}
  ${margin}
  ${marginBottom}
  ${marginLeft}
  ${marginRight}
  ${marginTop}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${opacity}
  ${order}
  ${outline}
  ${outlineColor}
  ${outlineWidth}
  ${overflow}
  ${overflowX}
  ${overflowY}
  ${padding}
  ${paddingBottom}
  ${paddingTop}
  ${paddingLeft}
  ${paddingRight}
  ${pageBreakAfter}
  ${pageBreakBefore}
  ${pageBreakInside}
  ${pointerEvents}
  ${position}
  ${quotes}
  ${rowGap}
  ${resize}
  ${right}
  ${tabSize}
  ${tableLayout}
  ${textAlign}
  ${textDecoration}
  ${textIndent}
  ${textJustify}
  ${textOverflow}
  ${textShadow}
  ${textTransform}
  ${top}
  ${transform}
  ${transformOrigin}
  ${transformStyle}
  ${transition}
  ${verticalAlign}
  ${visibility}
  ${whiteSpace}
  ${width}
  ${wordBreak}
  ${wordSpacing}
  ${wordWrap}
  ${zIndex}
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
  background; white;
`;

const ContainerInside = styled.div`
  display: flex;
  flex-direction:  ${(props) => props.flexDirection};
  width: 100%;
`;

const BottomPart = styled.div`
  background-color: white;
  padding: 16px;
  width:  ${(props) => props.widthBottomPart};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
const TextPart = styled.div``;
const ButtonsPart = styled.div`
  display: flex;
  gap:  ${(props) => props.gap};
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
  border-radius: 16px;
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
  cardImageWidth: "100%"
};

export default Card;
