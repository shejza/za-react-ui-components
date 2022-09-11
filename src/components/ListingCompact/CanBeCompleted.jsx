import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import { breakpoints } from "../../constants";
import { useMedias } from "../hooks/useMedia";

const CanBeCompleted = ({ canCompleteMultipleTimes, contributions_per_user, completedCount }) => {
  const { isMobile } = useMedias();
  return (
    <StyledBox flex alignItems="center">
      {isMobile && (
        <Label typography="body/small" color="secondary500">
         Can Be Completed:
        </Label>
      )}
      <IconSvg icon="repeat" width="15px" color="secondary800" spacing="mr-2" />
      <CompletedText extraBold color="secondary500" typography="body/small">
        {canCompleteMultipleTimes
          ? "multiple"
          : completedCount > 0
            ? `${contributions_per_user - completedCount} more`
            : contributions_per_user}{" "}
        times
      </CompletedText>
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  width: 114px;
  @media ${breakpoints.mobile} {
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
`;
const CompletedText = styled(Text)`
  flex: 1;
  @media ${breakpoints.mobile} {
    max-width: 120px;
  }
`;

const Label = styled(Text)`
  margin-right: 12px;
`;

export default CanBeCompleted;
