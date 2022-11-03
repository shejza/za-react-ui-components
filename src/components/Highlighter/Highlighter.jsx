import React from "react";
import styled from "styled-components";
import { gridColumn, justifySelf, fontFamily, lineHeight, fontWeight } from "../properties";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Highlighter = styled(({ ...props }) => {
  return (
    <SyntaxHighlighter language={"js"} style={oneDark}>
      {props.children}
    </SyntaxHighlighter>
  );
})`
  ${gridColumn}
  ${justifySelf}
  ${fontFamily}
  ${lineHeight}
  ${fontWeight}
  ${({ onClick }) => onClick && "cursor: pointer;"}
  ${({ center }) => center && "display: flex; justify-content: center; align-items: center;"}
  ${({ centerItems }) => centerItems && "display: flex; align-items: center;"}
`;

export default Highlighter;
