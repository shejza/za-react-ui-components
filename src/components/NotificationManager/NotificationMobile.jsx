import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import Tooltip from "../Tooltip/Tooltip";
import OptionsPanel from "../OptionsPanel/OptionsPanel";
import { theme } from "../../constants";

const NotificationMobile = ({ id, dismiss, seen, text, sparklesImg, ...props }) => (
  <StyledBox bgColor={!seen && "tertiary50"} sparklesImg={sparklesImg}>
    <Title {...props} />
   
    <Paragraph typography="body/medium" color="secondary400" bold={!seen}>
      {text}
    </Paragraph>
  </StyledBox>
);

const Paragraph = styled(Text)`
  max-width: 313px;
  margin-top: 8px;
`;

const Title = ({ time, icon, title, iconColor, iconWidth="16px", dismiss, id, seen }) => (
  <TitleWrapper>
    <Box alignItems="center" spacing="pb-2" flex>
      <IconSvg icon={icon} height="24px" color={iconColor} width={iconWidth} />
      <Text spacing="ml-2" typography="body/medium" extraBold color="secondary500">
        {title}
      </Text>
    </Box>
    <Text typography="body/small" color="tertiary400">
      {time}
    </Text>
    { !seen && 
    <WrapperDropdown>
      <OptionsPanel padding="0" right="0" top="40px">
        <DropDownOption pointer flex alignItems="center" onClick={dismiss} data-id={id}>
          <Text color="secondary500" typography="body/medium">Mark as seen</Text>
        </DropDownOption>
      </OptionsPanel>
    </WrapperDropdown>
    }
  </TitleWrapper>
);

const StyledBox = styled(Box)`
  background-image: ${({ sparklesImg }) => sparklesImg && `url(${sparklesImg});`} ;
  background-repeat: no-repeat;
  background-position: bottom 16px right 16px;
  border-bottom: 1px solid #d9d9d9;
  padding: 24px 16px 32px 16px;
  position: relative;
  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor};`}

  :last-of-type {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
  
const DropDownOption = styled(Box)`
  padding: 0 16px;
  max-width: 197px;
  height: 56px;
`;
const WrapperDropdown = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  svg {
   circle {
    fill: ${theme.colors.secondary500};
   }
  }
`;

const TitleWrapper = styled.div`
  position: relative;
`
export default NotificationMobile;
