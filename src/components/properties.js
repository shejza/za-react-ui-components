import { fontWeights } from "../constants";

export const alignItems = ({ alignItems }) => alignItems && `align-items: ${alignItems};`;
export const alignSelf = ({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`;
export const animation = ({ animation }) => animation && `animation: ${animation};`;
export const backgroundFilter = ({ backgroundFilter }) => backgroundFilter && `backdrop-filter: ${backgroundFilter};`;
export const background = ({ background }) => background && `background: ${background};`;
export const bgColor = ({ bgColor, theme }) => bgColor && ` background-color: ${theme.colors[bgColor] || bgColor};`;





export const textAlign = ({ textAlign }) => textAlign && `text-align: ${textAlign};`;

export const color = ({ color, theme }) => color && `color: ${theme.colors[color] || color};`;


export const pointer = ({ pointer }) => pointer && "cursor: pointer;";

export const justifyContent = ({ justifyContent }) =>
  justifyContent && `justify-content: ${justifyContent} !important;`;

export const justifyItems = ({ justifyItems }) => justifyItems && `justify-items: ${justifyItems};`;

export const justifySelf = ({ justifySelf }) => justifySelf && `justify-self: ${justifySelf} !important;`;

export const alignContent = ({ alignContent }) => alignContent && `align-content: ${alignContent};`;


export const wrap = ({ wrap }) => wrap && "flex-wrap: wrap !important;";

export const shrink = ({ shrink }) => shrink && `flex-shrink: ${shrink};`;

export const direction = ({ direction }) => direction && `flex-direction: ${direction};`;

export const relative = ({ relative }) => relative && "position: relative;";

export const borderRadius = ({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`;

export const borderColor = ({ borderColor, theme }) =>
  borderColor && `border-color: ${theme.colors[borderColor] || borderColor};`;

export const grow = ({ grow }) => grow && `flex-grow: ${grow};`;

export const fontWeight = ({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`;

export const columns = ({ columns }) => columns && `grid-template-columns: ${columns};`;

export const rows = ({ rows }) => rows && `grid-template-rows: ${rows};`;

export const template = ({ template }) => template && `grid-template: ${template};`;

export const gap = ({ gap }) => gap && `gap: ${gap};`;

export const rowGrap = ({ rowGrap }) => rowGrap && `row-grap: ${rowGrap};`;

export const columnGap = ({ columnGap }) => columnGap && `column-gap: ${columnGap};`;

export const gridColumn = ({ gridColumn }) => gridColumn && `grid-column: ${gridColumn};`;

export const disablePointerEvents = ({ disablePointerEvents, loading }) =>
  (disablePointerEvents || loading) && "pointer-events: none;";

export const underline = ({ underline }) => underline && "text-decoration: underline;";

export const hoverUnderline = ({ hoverUnderline }) => hoverUnderline && "&:hover{ text-decoration: underline; }";

export const bold = ({ bold }) => bold && `font-weight: ${fontWeights.bold};`;

export const float = ({ float }) => float && `float: ${float};`;

export const transform = ({ transform }) => transform && `transform: ${transform};`;

export const leaf = ({ leaf }) => leaf && `border-radius: 0px 24px;`;

export const maxWidth = ({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`;

export const heightSize = ({ heightSize }) => heightSize && `height: ${heightSize};`;

export const widthFull = ({ widthFull }) => widthFull && `width: 100%;`;

export const fontFamily = ({ fontFamily }) => fontFamily && `font-family: ${fontFamily};`;

export const lineHeight = ({ lineHeight }) => lineHeight && `line-height: ${lineHeight};`;

export const borderWidth = ({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`;

export const fullScreen = ({ fullScreen }) =>
  fullScreen &&
  `width: 100%; max-width: unset; max-height: 100%; height: 100%; transform: unset; border-radius: 0px 50px;`;
export const buttonCircle = ({ buttonCircle, theme }) =>
  buttonCircle && `width: 42px; height: 42px; border-radius: 50%; border-color: ${theme.colors.secondary400}`;

export const marginBottom = ({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`;

export const padding = ({ padding }) => padding && `padding: ${padding};`;
