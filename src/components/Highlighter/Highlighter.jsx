import React from "react";
import styled from "styled-components";
import useTypography from "../../utils/typography";
import useFontProps from "../../utils/font-props";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import useHeightProps from "../../utils/height-props";
import { gridColumn, justifySelf, pointer, underline, fontFamily, lineHeight, fontWeight } from "../properties";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Highlighter = styled(({ ...props }) => {
  return (
    <SyntaxHighlighter language={"js"} style={oneDark}>
      {props.children}
    </SyntaxHighlighter>
  );
})`
  ${useSpacingProps}
  ${useFontProps}
  ${useTypography}
  ${useWidthProps}
  ${useHeightProps}
  ${pointer}
  ${gridColumn}
  ${underline}
  ${justifySelf}
  ${fontFamily}
  ${lineHeight}
  ${fontWeight}
  ${({ onClick }) => onClick && "cursor: pointer;"}
  ${({ center }) => center && "display: flex; justify-content: center; align-items: center;"}
  ${({ centerItems }) => centerItems && "display: flex; align-items: center;"}
`;

export default Highlighter;
