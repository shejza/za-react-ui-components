import React from "react";
import styled from "styled-components";
import Markdown from "react-markdown";
import useTypography from "../../utils/typography";
import useFontProps from "../../utils/font-props";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import useHeightProps from "../../utils/height-props";
import { gridColumn, justifySelf, pointer, underline, fontFamily, lineHeight, fontWeight } from "../properties";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter
        style={oneDark}
        PreTag="div"
        language={match[1]}
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className ? className : ""} {...props}>
        {children}
      </code>
    );
  }
}

const MarkdownText = styled(({children, ...props }) => {
  return (
    <Markdown
      components={CodeBlock}
    >
      {children}
    </Markdown>
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

export default MarkdownText;
