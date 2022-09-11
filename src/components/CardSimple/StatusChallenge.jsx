import React from "react";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import Box from "../Box/Box";
import Tooltip from "../Tooltip/Tooltip";
import styled from "styled-components";
import { useDesktop, useMobile } from "../hooks/useMedia";

const StatusChallenge = ({ text, color, icon, tooltipMsg }) => {
  const isDesktop = useDesktop();
  const isMobile = useMobile();

  return (
    <Tooltip
      bgColor="tertiary0"
      borderWidth="12px"
      $textAlign="left"
      direction="top"
      arrowPosition={isDesktop ? "95%" : "5%"}
      transform={isDesktop ? "translate(-92%, -15%)" : "translate(-30%, -15%)"}
      message={tooltipMsg}
      $minWidth={isMobile ? "100%" : "334px"}
    >
      <Box gap="7px" alignItems="center" justifyContent="flex-end" flex={+true}>
        <StyledText size="16px" color={color}>
          {text}
        </StyledText>
        <IconSvg width="16px" color={color} icon={icon} className={color === "success150" && "success150"}  />
      </Box>
    </Tooltip>
  );
};

const StyledText = styled(Text)`
  white-space: nowrap;
`;

export default StatusChallenge;
