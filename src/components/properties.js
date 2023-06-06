export const alignItems = ({ alignItems }) => alignItems && `align-items: ${alignItems};`;
export const alignSelf = ({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`;
export const alignContent = ({ alignContent }) => alignContent && `align-content: ${alignContent};`;
export const animation = ({ animation }) => animation && `animation: ${animation};`;
export const backdropFilter = ({ backdropFilter }) => backdropFilter && `backdrop-filter: ${backdropFilter};`;
export const background = ({ background }) => background && `background: ${background};`;
export const bgColor = ({ bgColor, theme }) => bgColor && ` background-color: ${theme.colors[bgColor] || bgColor};`;
export const border = ({ border }) => border && `border: ${border};`;
export const borderBottom = ({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom};`;
export const borderTop = ({ borderTop }) => borderTop && `border-top: ${borderTop};`;
export const borderLeft = ({ borderLeft }) => borderLeft && `border-left: ${borderLeft};`;
export const borderRight = ({ borderRight }) => borderRight && `border-right: ${borderRight};`;
export const borderColor = ({ borderColor, theme }) =>
  borderColor && `border-color: ${theme.colors[borderColor] || borderColor};`;
  export const borderWidth = ({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`;
export const borderRadius = ({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`;
export const bottom = ({ bottom }) => bottom && `bottom: ${bottom};`;
export const boxShadow = ({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow};`;
export const boxSizing = ({ boxSizing }) => boxSizing && `box-sizing: ${boxSizing};`;
export const clip = ({ clip }) => clip && `clip: ${clip};`;
export const color = ({ color, theme }) => color && `color: ${theme.colors[color] || color};`;
export const cursor = ({ cursor }) => cursor && `cursor: ${cursor};`;
export const columnGap = ({ columnGap }) => columnGap && `column-gap: ${columnGap};`;
export const display = ({ display }) => display && `display: ${display};`;
export const filter = ({ filter }) => filter && `filter: ${filter};`;
export const float = ({ float }) => float && `float: ${float};`;
export const font = ({ font }) => font && `font: ${font};`;
export const fontFamily = ({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`;
export const fontSize = ({ fontSize }) => fontSize && `font-size: ${fontSize};`;
export const fontStyle = ({ fontStyle }) => fontStyle && `font-style: ${fontStyle};`;
export const fontVariant = ({ fontVariant }) => fontVariant && `font-variant: ${fontVariant};`;
export const fontWeight = ({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`;
export const flexWrap = ({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`;
export const flexShrink = ({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`;
export const flexDirection = ({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`;
export const flexGrow = ({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`;
export const gridColumn = ({ gridColumn }) => gridColumn && `grid-column: ${gridColumn};`;
export const gridTemplateColumns = ({ gridTemplateColumns }) => gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`;
export const gridTemplateRows = ({ gridTemplateRows }) => gridTemplateRows && `grid-template-rows: ${gridTemplateRows};`;
export const gridTemplate = ({ gridTemplate }) => gridTemplate && `grid-template: ${gridTemplate};`;
export const gap = ({ gap }) => gap && `gap: ${gap};`;
export const height = ({ height }) => height && `height: ${height};`;
export const justifyContent = ({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`;
export const justifyItems = ({ justifyItems }) => justifyItems && `justify-items: ${justifyItems};`;
export const justifySelf = ({ justifySelf }) => justifySelf && `justify-self: ${justifySelf};`;
export const left = ({ left }) => left && `left: ${left};`;
export const letterSpacing = ({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing};`;
export const lineHeight = ({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`;
export const listStyle = ({ listStyle }) => listStyle && `list-style: ${listStyle};`;
export const listStyleImage = ({ listStyleImage }) => listStyleImage && `list-style-image: ${listStyleImage};`;
export const listStylePosition = ({ listStylePosition }) => listStylePosition && `list-style-position: ${listStylePosition};`;
export const listStyleType = ({ listStyleType }) => listStyleType && `list-style-type: ${listStyleType};`;
export const margin = ({ margin }) => margin && `margin: ${margin};`;
export const marginBottom = ({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`;
export const marginLeft = ({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`;
export const marginRight = ({ marginRight }) => marginRight && `margin-right: ${marginRight};`;
export const marginTop = ({ marginTop }) => marginTop && `margin-top: ${marginTop};`;
export const maxHeight = ({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`;
export const maxWidth = ({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`;
export const minHeight = ({ minHeight }) => minHeight && `min-height: ${minHeight};`;
export const minWidth = ({ minWidth }) => minWidth && `min-width: ${minWidth};`;
export const opacity = ({ opacity }) => opacity && `opacity: ${opacity};`;
export const order = ({ order }) => order && `order: ${order};`;
export const outline = ({ outline }) => outline && `outline: ${outline};`;
export const outlineColor = ({ outlineColor }) => outlineColor && `outline-color: ${outlineColor};`;
export const outlineStyle = ({ outlineStyle }) => outlineStyle && `outline-style: ${outlineStyle};`;
export const outlineWidth = ({ outlineWidth }) => outlineWidth && `outline-width: ${outlineWidth};`;
export const overflow = ({ overflow }) => overflow && `overflow: ${overflow};`;
export const overflowX = ({ overflowX }) => overflowX && `overflow-x: ${overflowX};`;
export const overflowY = ({ overflowY }) => overflowY && `overflow-y: ${overflowY};`;
export const padding = ({ padding }) => padding && `padding: ${padding};`;
export const paddingBottom = ({ paddingBottom }) => paddingBottom && `padding-bottom: ${paddingBottom};`;
export const paddingTop = ({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`;
export const paddingLeft = ({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`;
export const paddingRight = ({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`;
export const pageBreakAfter = ({ pageBreakAfter }) => pageBreakAfter && `page-break-after: ${pageBreakAfter};`;
export const pageBreakBefore = ({ pageBreakBefore }) => pageBreakBefore && `page-break-before: ${pageBreakBefore};`;
export const pageBreakInside = ({ pageBreakInside }) => pageBreakInside && `page-break-inside: ${pageBreakInside};`;
export const pointerEvents = ({ pointerEvents }) => pointerEvents && `pointer-events: ${pointerEvents};`;
export const position = ({ position }) => position && `position: ${position};`;
export const quotes = ({ quotes }) => quotes && `quotes: ${quotes};`;
export const rowGap = ({ rowGap }) => rowGap && `row-gap: ${rowGap};`;
export const resize = ({ resize }) => resize && `resize: ${resize};`;
export const right = ({ right }) => right && `right: ${right};`;
export const tabSize = ({ tabSize }) => tabSize && `tab-size: ${tabSize};`;
export const tableLayout = ({ tableLayout }) => tableLayout && `table-layout: ${tableLayout};`;
export const textAlign = ({ textAlign }) => textAlign && `text-align: ${textAlign};`;
export const textDecoration = ({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration};`;
export const textIndent = ({ textIndent }) => textIndent && `text-indent: ${textIndent};`;
export const textJustify = ({ textJustify }) => textJustify && `text-justify: ${textJustify};`;
export const textOverflow = ({ textOverflow }) => textOverflow && `text-overflow: ${textOverflow};`;
export const textShadow = ({ textShadow }) => textShadow && `text-shadow: ${textShadow};`;
export const textTransform = ({ textTransform }) => textTransform && `text-transform: ${textTransform};`;
export const top = ({ top }) => top && `top: ${top};`;
export const transform = ({ transform }) => transform && `transform: ${transform};`;
export const transformOrigin = ({ transformOrigin }) => transformOrigin && `transform-origin: ${transformOrigin};`;
export const transformStyle = ({ transformStyle }) => transformStyle && `transform-style: ${transformStyle};`;
export const transition = ({ transition }) => transition && `transition: ${transition};`;
export const verticalAlign = ({ verticalAlign }) => verticalAlign && `vertical-align: ${verticalAlign};`;
export const visibility = ({ visibility }) => visibility && `visibility: ${visibility};`;
export const whiteSpace = ({ whiteSpace }) => whiteSpace && `white-space: ${whiteSpace};`;
export const width = ({ width }) => width && `width: ${width};`;
export const wordBreak = ({ wordBreak }) => wordBreak && `word-break: ${wordBreak};`;
export const wordSpacing = ({ wordSpacing }) => wordSpacing && `word-spacing: ${wordSpacing};`;
export const wordWrap = ({ wordWrap }) => wordWrap && `word-wrap: ${wordWrap};`;
export const zIndex = ({ zIndex }) => zIndex && `z-index: ${zIndex};`;
export const disabledControl = ({ disabled }) => disabled && `opacity: 0.25; pointer-events: none;`;

import styled from "styled-components";
export const MainWrapper = styled.div`
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
