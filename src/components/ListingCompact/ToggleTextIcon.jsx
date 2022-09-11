import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import { breakpoints } from "../../constants";
import Tooltip from "../Tooltip/Tooltip";
import { useMedias } from "../hooks/useMedia";

const ToggleTextIcon = (toggle, iconName, text, tooltipMessage, completed, showDetails, manuallyVerification) => {
  const { isMobile } = useMedias();
  const manuallyBtnBg = !showDetails && manuallyVerification;
  const mobileColorLabel = isMobile ? "#FF7D57" : "accent450";
  const manuallyMobileColor = isMobile ? "#fff" : "accent450";
  const mobileTextColor = manuallyBtnBg ? manuallyMobileColor : mobileColorLabel;
  const mobileBgColor = manuallyBtnBg ? "#E2857E" : !showDetails && "tertiary0";
  const isFullyCompleted =  completed ? "#DDEFE2" : mobileBgColor;

  return (
    <StyledBox bgColor={isMobile && isFullyCompleted} spacing="ml-a">
      <Tooltip message={tooltipMessage} direction="top" $minWidth="300px" transform="translate(-60%, -10%)">
        <StyledBoxToggle flex pointer alignItems="center" size="15px" gap="8px" onClick={toggle}>
          <Text underline={completed} color={completed ? "secondary800" : mobileTextColor} bold={+true}>
            {text}
          </Text>
          <IconSvg color={completed ? "secondary800" : mobileTextColor} icon={iconName} width="10px" />
        </StyledBoxToggle>
      </Tooltip>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  padding-left: 1rem;
  @media ${breakpoints.mobile} {
    margin: auto;
    width: 100%;
    padding: 0;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary100};
    border-radius: 0 0 12px 12px;
  }
`;

const StyledBoxToggle = styled(Box)`
  white-space: nowrap;
  margin-right: 60px;
  @media ${breakpoints.tablet} {
    margin-right: 24px;
  }
  @media ${breakpoints.mobile} {
    white-space: unset;
    margin-right: 0;
    gap: 4px;
  }
`;

export default ToggleTextIcon;
