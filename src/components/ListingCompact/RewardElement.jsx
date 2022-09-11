import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import { useMedias } from "../hooks/useMedia";
import { breakpoints } from "../../constants";

const RewardElement = ({ completed, earned, reward }) => {
  const { isMobile } = useMedias();
  return (
    <>
      <StyledBox>
        {isMobile && (
          <Label typography="body/small" color="secondary500">
            Reward:
          </Label>
        )}
        <Box flex alignItems="center" gap="6px">
          <IconSvg icon="logo-gold-circle" width="16px" />
          <Text extraBold typography="body/medium" color="accent550">
            {completed ? earned : reward} $THRIVE
          </Text>
        </Box>
      </StyledBox>
    </>
  );
};

const StyledBox = styled(Box)`
  padding-right: 78px;
  @media ${breakpoints.tablet} {
    padding-right: 55px;
  }
  @media ${breakpoints.mobile} {
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
`;

const Label = styled(Text)`
  margin-right: 12px;
`;

export default RewardElement;
