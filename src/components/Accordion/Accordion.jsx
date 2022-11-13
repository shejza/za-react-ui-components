import React, { useRef, useState } from "react";
import styled from "styled-components";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Icon from "../Icon/Icon";
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

import {
  alignItemsTitleContainer,
  alignSelfTitleContainer,
  alignContentTitleContainer,
  animationTitleContainer,
  backdropFilterTitleContainer,
  backgroundTitleContainer,
  bgColorTitleContainer,
  borderTitleContainer,
  borderBottomTitleContainer,
  borderTopTitleContainer,
  borderLeftTitleContainer,
  borderRightTitleContainer,
  borderColorTitleContainer,
  borderWidthTitleContainer,
  borderRadiusTitleContainer,
  bottomTitleContainer,
  boxShadowTitleContainer,
  boxSizingTitleContainer,
  clipTitleContainer,
  colorTitleContainer,
  cursorTitleContainer,
  columnGapTitleContainer,
  displayTitleContainer,
  filterTitleContainer,
  floatTitleContainer,
  fontTitleContainer,
  fontFamilyTitleContainer,
  fontSizeTitleContainer,
  fontStyleTitleContainer,
  fontVariantTitleContainer,
  fontWeightTitleContainer,
  flexWrapTitleContainer,
  flexShrinkTitleContainer,
  flexDirectionTitleContainer,
  flexGrowTitleContainer,
  gridColumnTitleContainer,
  gridTemplateColumnsTitleContainer,
  gridTemplateRowsTitleContainer,
  gridTemplateTitleContainer,
  gapTitleContainer,
  heightTitleContainer,
  justifyContentTitleContainer,
  justifyItemsTitleContainer,
  justifySelfTitleContainer,
  leftTitleContainer,
  letterSpacingTitleContainer,
  lineHeightTitleContainer,
  listStyleTitleContainer,
  listStyleImageTitleContainer,
  listStylePositionTitleContainer,
  listStyleTypeTitleContainer,
  marginTitleContainer,
  marginBottomTitleContainer,
  marginLeftTitleContainer,
  marginRightTitleContainer,
  marginTopTitleContainer,
  maxHeightTitleContainer,
  maxWidthTitleContainer,
  minHeightTitleContainer,
  minWidthTitleContainer,
  opacityTitleContainer,
  orderTitleContainer,
  outlineTitleContainer,
  outlineColorTitleContainer,
  outlineWidthTitleContainer,
  overflowTitleContainer,
  overflowXTitleContainer,
  overflowYTitleContainer,
  paddingTitleContainer,
  paddingBottomTitleContainer,
  paddingTopTitleContainer,
  paddingLeftTitleContainer,
  paddingRightTitleContainer,
  pageBreakAfterTitleContainer,
  pageBreakBeforeTitleContainer,
  pageBreakInsideTitleContainer,
  pointerEventsTitleContainer,
  positionTitleContainer,
  quotesTitleContainer,
  rowGapTitleContainer,
  resizeTitleContainer,
  rightTitleContainer,
  tabSizeTitleContainer,
  tableLayoutTitleContainer,
  textAlignTitleContainer,
  textDecorationTitleContainer,
  textIndentTitleContainer,
  textJustifyTitleContainer,
  textOverflowTitleContainer,
  textShadowTitleContainer,
  textTransformTitleContainer,
  topTitleContainer,
  transformTitleContainer,
  transformOriginTitleContainer,
  transformStyleTitleContainer,
  transitionTitleContainer,
  verticalAlignTitleContainer,
  visibilityTitleContainer,
  whiteSpaceTitleContainer,
  widthTitleContainer,
  wordBreakTitleContainer,
  wordSpacingTitleContainer,
  wordWrapTitleContainer,
  zIndexTitleContainer,
} from "./accordionTitleProps";

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
    <Wrapper {...props} ref={ref}>
      <Container {...props} bgColorTitleContainer={isActive ? "white" : "gray100"} onClick={toggle}>
        <Title {...props}>{title}</Title>
        {!hideIcon && <>{iconElement}</>}
      </Container>
      {isActive && <Description {...props}>{children}</Description>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  ${alignItemsTitleContainer}
  ${alignSelfTitleContainer}
${alignContentTitleContainer}
${animationTitleContainer}
${backdropFilterTitleContainer}
${backgroundTitleContainer}
${bgColorTitleContainer}
${borderTitleContainer}
${borderBottomTitleContainer}
${borderTopTitleContainer}
${borderLeftTitleContainer}
${borderRightTitleContainer}
${borderColorTitleContainer}
${borderWidthTitleContainer}
${borderRadiusTitleContainer}
${bottomTitleContainer}
${boxShadowTitleContainer}
${boxSizingTitleContainer}
${clipTitleContainer}
${colorTitleContainer}
${cursorTitleContainer}
${columnGapTitleContainer}
${displayTitleContainer}
${filterTitleContainer}
${floatTitleContainer}
${fontTitleContainer}
${fontFamilyTitleContainer}
${fontSizeTitleContainer}
${fontStyleTitleContainer}
${fontVariantTitleContainer}
${fontWeightTitleContainer}
${flexWrapTitleContainer}
${flexShrinkTitleContainer}
${flexDirectionTitleContainer}
${flexGrowTitleContainer}
${gridColumnTitleContainer}
${gridTemplateColumnsTitleContainer}
${gridTemplateRowsTitleContainer}
${gridTemplateTitleContainer}
${gapTitleContainer}
${heightTitleContainer}
${justifyContentTitleContainer}
${justifyItemsTitleContainer}
${justifySelfTitleContainer}
${leftTitleContainer}
${letterSpacingTitleContainer}
${lineHeightTitleContainer}
${listStyleTitleContainer}
${listStyleImageTitleContainer}
${listStylePositionTitleContainer}
${listStyleTypeTitleContainer}
${marginTitleContainer}
${marginBottomTitleContainer}
${marginLeftTitleContainer}
${marginRightTitleContainer}
${marginTopTitleContainer}
${maxHeightTitleContainer}
${maxWidthTitleContainer}
${minHeightTitleContainer}
${minWidthTitleContainer}
${opacityTitleContainer}
${orderTitleContainer}
${outlineTitleContainer}
${outlineColorTitleContainer}
${outlineWidthTitleContainer}
${overflowTitleContainer}
${overflowXTitleContainer}
${overflowYTitleContainer}
${paddingTitleContainer}
${paddingBottomTitleContainer}
${paddingTopTitleContainer}
${paddingLeftTitleContainer}
${paddingRightTitleContainer}
${pageBreakAfterTitleContainer}
${pageBreakBeforeTitleContainer}
${pageBreakInsideTitleContainer}
${pointerEventsTitleContainer}
${positionTitleContainer}
${quotesTitleContainer}
${rowGapTitleContainer}
${resizeTitleContainer}
${rightTitleContainer}
${tabSizeTitleContainer}
${tableLayoutTitleContainer}
${textAlignTitleContainer}
${textDecorationTitleContainer}
${textIndentTitleContainer}
${textJustifyTitleContainer}
${textOverflowTitleContainer}
${textShadowTitleContainer}
${textTransformTitleContainer}
${topTitleContainer}
${transformTitleContainer}
${transformOriginTitleContainer}
${transformStyleTitleContainer}
${transitionTitleContainer}
${verticalAlignTitleContainer}
${visibilityTitleContainer}
${whiteSpaceTitleContainer}
${widthTitleContainer}
${wordBreakTitleContainer}
${wordSpacingTitleContainer}
${wordWrapTitleContainer}
${zIndexTitleContainer}
`;

const Title = styled.h1`
  ${({ backgroundTitle }) => backgroundTitle && `background:  ${backgroundTitle}`};
  ${({ borderTitle }) => borderTitle && `border:  ${borderTitle}`};
  ${({ borderRadiusTitle }) => borderRadiusTitle && `border-radius:  ${borderRadiusTitle}`};
  ${({ colorTitle }) => colorTitle && `color:  ${colorTitle}`};
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
  ${({ backgroundDescription }) => backgroundDescription && `background:  ${backgroundDescription}`};
  ${({ borderDescription }) => borderDescription && `border:  ${borderDescription}`};
  ${({ borderRadiusDescription }) => borderRadiusDescription && `border-radius:  ${borderRadiusDescription}`};
  ${({ colorDescription }) => colorDescription && `color:  ${colorDescription}`};
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
  ${({ iconColor }) => iconColor && `color:  ${iconColor}`};
`;
Accordion.defaultProps = {
  active: false,
  hideIcon: false,
  border: "1px solid #BDBDBD",
  borderRadius: "8px",
  borderRadiusTitleContainer: "8px",
  paddingTitleContainer: "16px",
  alignItemsTitleContainer: "center",
  flexDirectionTitleContainer: "row",
  justifyContentTitleContainer: "space-between",
  displayTitleContainer: "flex",
  cursor: "pointer",
  paddingDescription: "0 0 16px 16px",
  fontWeightTitle: 700,
  fontSizeTitle: "18px",
  colorTitle: "#616161",
  iconWidth: "20px",
  iconColor: "gray",
  icon: "MdKeyboardArrowDown",
};

export default Accordion;
