import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import MarkdownText from "../MarkdownText/MarkdownText";

const Condition = ({icon, condition, conditionDescription, link, iconWidth = "14px", gap="12px", moveLeft, isDesktop}) => {
  return (
    <Box
      flex
      alignItems={isDesktop && "center"}
      gap={gap}
      spacing="mb-4 mr-7+2"
      md-spacing="mb-4 mr-a"
      sm-spacing="mb-4 mr-a">
      <IconSvg icon={icon} width={iconWidth} color="primary700" spacing={moveLeft}/>
      <ConditionText
        color="secondary500"
        bold
        size="14px"
        lHeight="21px"
      >
        {condition}: {!link ? <MarkdownText linkTarget="_blank">{conditionDescription}</MarkdownText>
          : (
            <Link target="_blank" href={link}>
              {conditionDescription}
            </Link>
          )}
      </ConditionText>
    </Box>
  );
};



const ConditionText = styled(Text)`
  flex: 1;
  display: flex;
  gap: 4px;
  & p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  & a {
    color: #88CFDE;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #88CFDE;
`;

export default Condition;