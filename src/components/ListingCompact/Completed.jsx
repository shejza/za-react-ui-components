import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import Box from "../Box/Box";
import { breakpoints } from "../../constants";
import { useMedias } from "../hooks/useMedia";
import FullyCompletedLabel from './FullyCompletedLabel';

const Completed = ({ completedCount, completed }) => {
  const { isMobile } = useMedias();
  const completedCountCheck = completedCount > 0 && isMobile;
  const completedCheckMobile = isMobile ? completedCountCheck : !completed;
  const text = completedCheckMobile && `Completed ${completedCount} ${completedCount === 1 ? "time" : "times"}`;

  if (completedCount === 0 && !completed) {
    return (
      <StyledBox>
        {" "}
        {isMobile && (
          <Label typography="body/small" color="secondary500">
            Completions:
          </Label>
        )}{" "}
        -
      </StyledBox>
    );
  }
  return (
    <Wrapper>
      {isMobile && (
        <Label typography="body/small" color="secondary500">
          Completions:
        </Label>
      )}

      {completedCheckMobile &&
        <StyledBox flex alignItems="center" gap="6px">
          <IconSvg icon="filled-check-circle" width="18px" color="primary700" />
          <Text extraBold size="14px" lHeight="21px" color="secondary800">
            {text}
          </Text>
        </StyledBox>
      }
      {completed && !isMobile && <FullyCompletedLabel/> }
    </Wrapper>
  );
};

const StyledBox = styled(Box)`
  white-space: nowrap;
  min-width: 148px;
  margin-right: 72px;
  @media ${breakpoints.tablet} {
    margin-right: 43px;
  }
  @media ${breakpoints.mobile} {
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
`;

const Wrapper = styled(Box)`
  @media ${breakpoints.mobile} {
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
`;

const Label = styled(Text)`
  margin-right: 12px;
`;
export default Completed;
