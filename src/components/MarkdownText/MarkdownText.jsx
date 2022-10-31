import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import useTypography from "../../utils/typography";
import useFontProps from "../../utils/font-props";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import useHeightProps from "../../utils/height-props";
import { gridColumn, justifySelf, fontFamily, lineHeight, fontWeight } from "../properties";
import Highlighter from './../Highlighter/Highlighter';




const MarkdownText = styled(({ ...props }) => {
  return (
    <ReactMarkdown
      children={props.children}
      components={{
        code: ({ node, ...props }) => <Highlighter {...props} />,
      }}
    />
  );
})`
  ${useSpacingProps}
  ${useFontProps}
  ${useTypography}
  ${useWidthProps}
  ${useHeightProps}
  ${gridColumn}
  ${justifySelf}
  ${fontFamily}
  ${lineHeight}
  ${fontWeight}
  ${({ onClick }) => onClick && "cursor: pointer;"}
  ${({ center }) => center && "display: flex; justify-content: center; align-items: center;"}
  ${({ centerItems }) => centerItems && "display: flex; align-items: center;"}
`;

export default MarkdownText;
