import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import useTypography from "../../utils/typography";
import useFontProps from "../../utils/font-props";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import useHeightProps from "../../utils/height-props";
import { gridColumn, justifySelf, pointer, underline, fontFamily, lineHeight, fontWeight } from "../properties";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";


const MarkdownText = styled(({ ...props }) => {
  return (
    <ReactMarkdown
      children={props.children}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={oneDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
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
