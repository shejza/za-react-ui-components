// eslint-disable-file no-console
import { spacings } from "../constants";
import { css } from "styled-components";
import { color } from "../components/properties";
import fontWeigthProps from "./fontWeightProps";
export default function useFontProps() {
  return css`
    margin-bottom: ${(props) => (props.type ? spacings[2] + "em" : "0em")};
    margin-top: ${(props) => (props.type ? spacings[1] + "em" : "0em")};
    line-height: inherit;

    ${({ size }) => size && ` font-size: ${size}; `}

    ${({ lHeight }) => lHeight && css` line-height: ${lHeight}; `}

    ${color}

    ${({ align, textAlign }) => (align || textAlign) && css` text-align: ${align || textAlign}; `}

    ${({ noWrap }) => noWrap && css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}

    ${({ inline }) => inline && css` display: inline; `}

    ${({ inlineBlock }) => inlineBlock && css` display: inline-block; `}

    ${fontWeigthProps}

    ${({ italic }) => italic && css` font-style: italic; `}
  `;
}
