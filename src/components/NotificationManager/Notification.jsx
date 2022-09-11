import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import Tooltip from "../Tooltip/Tooltip";


const Notification = ({ id, dismiss, seen, text, sparklesImg, ...props }) => (
  <StyledBox bgColor={!seen && "tertiary50"} sparklesImg={sparklesImg}>
    <Title {...props} />
    <Paragraph typography="body/medium" color="secondary400" bold>{text}</Paragraph>
      
      {!seen  && <StyledTooltip message={"Mark as seen"} direction="left" $width="max-content" onClick={dismiss} data-id={id}>
        <Mark $borderColor={"#5fb974"}/>
      </StyledTooltip>
      }
  </StyledBox>
);

const Paragraph = styled(Text)`
  max-width: 313px;
  margin-top: 8px;
`
const StyledTooltip = styled(Tooltip)`
  position: absolute;
  right: 16px;
  bottom: 20px;
  ${Tooltip.Message} {
    ${({ $width }) => $width && `width: ${$width};`}
  }
`;

const Mark = styled.div`
  width: 5px;
  height: 5px;
  border: 3px solid;
  border-radius: 0.5rem;
  ${({ $borderColor }) => $borderColor && `border-color: ${$borderColor};`}
`;

const Title = ({ time, icon, title, iconColor, iconWidth }) => (
  <Box flex justifyContent="space-between">
    <Box flex>
      <IconSvg icon={icon} color={iconColor} width={iconWidth} />
      <Text spacing="ml-2" typography="body/medium" extraBold color="secondary500">
        {title}
      </Text>
    </Box>
    <Text typography="Body/Small" color="tertiary400" bold>
      {time}
    </Text>
  </Box>
);

const StyledBox = styled(Box)`
  background-image: ${({ sparklesImg }) => sparklesImg && `url(${sparklesImg});`} ;
  background-repeat: no-repeat;
  background-position: bottom 23.75px right 30.4px;
  border-bottom: 1px solid #d9d9d9;
  padding: 24px 15px 32px 23px;
  position: relative;
  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor};`}

  :last-of-type {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

export default Notification;
