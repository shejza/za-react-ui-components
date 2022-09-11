import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import { breakpoints } from "../../constants";
import { useMedias } from "../hooks/useMedia";

const CompletionCheck = ({
  manuallyVerification,
  isAuthenticated,
  socialProfileConnected,
  completed,
  completedCount,
  type,
}) => {
  const { isMobile } = useMedias();
  const completionInProgress = !completed && completedCount > 0;
  return (
    <Wrapper>
      {isMobile && (
        <Label typography="body/small" color="secondary500">
          Completion Check:
        </Label>
      )}
      {manuallyVerification && completionInProgress && (
        <StyledBoxChecked
          spacing="py-1 px-2 mr-4"
          bgColor="rgba(169, 220, 230, 0.35)"
          borderRadius="4px"
          color="#4F99B9"
        >
          <Text bold typography="body/small">
            Manual
          </Text>
        </StyledBoxChecked>
      )}

      {!completed && !manuallyVerification && (
        <>
          {!socialProfileConnected || !isAuthenticated ? (
            <StyledLabel color="destructive300" bold typography="body/small" spacing="mr-4">
              Automatic {!isMobile && <br />}
              (Needs connection)
            </StyledLabel>
          ) : (
            <StyledLabel color="secondary300" typography="body/small" spacing="mr-4">
              Automatic
            </StyledLabel>
          )}
        </>
      )}

      {completed && (
        <StyledText bold color="success500" typography="body/small">
          Reward earned!
        </StyledText>
      )}
    </Wrapper>
  );
};

const StyledBoxChecked = styled(Box)`
  white-space: nowrap;
  min-width: 47px;
  height: 21px;
  margin-left: 85px;
  @media ${breakpoints.tablet} {
    margin-left: 45px;
  }
  @media ${breakpoints.mobile} {
    margin-left: 0;
  }
`;

const StyledText = styled(Text)`
  background: #ffffff;
  border-radius: 4px;
  width: 115px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 145px;
  @media ${breakpoints.tablet} {
    margin-left: 45px;
  }
  @media ${breakpoints.mobile} {
    margin-left: 0;
  }
`;

const StyledLabel = styled(Text)`
  margin-left: 85px;
  @media ${breakpoints.tablet} {
    margin-left: 45px;
  }
  @media ${breakpoints.mobile} {
    margin-left: 0;
  }
`;

const Label = styled(Text)`
  margin-right: 12px;
`;

const Wrapper = styled(Box)`
  @media ${breakpoints.mobile} {
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
`;
export default CompletionCheck;
