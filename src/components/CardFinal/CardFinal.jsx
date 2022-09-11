import React from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import SparklesImage from "../assets/sparkles.svg";
import SparklesImage2 from "../assets/sparkles2.svg";
import Box from "../Box/Box";
import { breakpoints, theme, fontWeights } from "../../constants";
import pluralize from "../../utils/pluralize";
import { useMobile } from "../hooks/useMedia";

const CardFinal = ({ reward, stepsLeft, challengeCompleted, isPrevious, stepsOnPending }) => {
  const isMobile = useMobile();
  let topContent, bottomcontent;

  if (challengeCompleted) {
    isMobile ? (bottomcontent = <Content />) : (topContent = <Content />);
  }

  return (
    <CardWrapper>
      <StepCircle className={challengeCompleted && "step-complete"}>
        {!challengeCompleted && isPrevious ? (
          <IconSvg icon="x" width="14px" color="tertiary0" />
        ) : (
          <FlagIcon icon="flag" width="14px" color="tertiary0" />
        )}
      </StepCircle>
      <Wrapper className={challengeCompleted && "challenge-completed"}>
        <LeftPart>
          <Text size="16px" extraBold fontFamily="Proxima Nova">
            {message(stepsOnPending, stepsLeft, challengeCompleted)}
          </Text>
        </LeftPart>

        <RightPart>
          {topContent}
          <Reward>
            <Text size="14px" color="secondary400">
              Challenge completion bonus
            </Text>
            <IconText>
              <IconSvg width={challengeCompleted ? "20px" : "16px"} icon="star" />
              <Text size={challengeCompleted ? "24px" : "16px"} color="accent550" extraBold>
                {reward} $THRIVE
              </Text>
            </IconText>
          </Reward>
        </RightPart>
        {bottomcontent}
      </Wrapper>
    </CardWrapper>
  );
};

const Content = () => (
  <CompletedBox>
    <IconSvg width="15px" icon="circle-check" color={theme.colors.primary600} />
    <Text size="16px" bold={+true}>
      Nice work!
    </Text>
    <IconSvg width="24px" icon="cheers" />
  </CompletedBox>
);

const message = (stepsOnPending, stepsLeft, challengeCompleted) => {
  if (challengeCompleted) {
    return "Challenge completed!";
  }

  if (stepsOnPending) {
    if (stepsLeft > 0) {
      return `${stepsLeft} more ${pluralize("step", stepsLeft)}
              to complete (+${stepsOnPending} pending review) to finish`;
    } else {
      return `${stepsOnPending} ${pluralize("contribution", stepsOnPending)} pending review to finish`;
    }
  } else {
    return `${stepsLeft} more ${pluralize("step", stepsLeft)} to complete this challenge`;
  }
};

const LeftPart = styled.div`
  padding-right: 12px;
  display: flex;
  align-items: center;

  @media ${breakpoints.mobile} {
    padding-right: 0;
  }
`;

const Wrapper = styled.div`
  opacity: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 24px 21px 58px;
  border-radius: 8px;
  &.challenge-completed {
    opacity: 1;
    background: #fee797;
  }

  @media ${breakpoints.mobile} {
    padding: 17px 14px 13px 32px;
    flex-direction: column;
    align-items: flex-start;
    width: auto;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3.9rem;
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  box-sizing: border-box;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;

  &.stepCompleted {
    padding: 24px 24px 26px 58px;
    background: url(${SparklesImage}) no-repeat 97%, url(${SparklesImage2}) no-repeat 95%,
      ${({ theme }) => theme.colors.tertiary0};
  }

  @media ${breakpoints.mobile} {
    flex-direction: column;
  }
`;

const RightPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 0 24px;
  min-width: 210px;
  text-align: right;
  margin-left: auto;
  gap: 30px;

  @media ${breakpoints.mobile} {
    flex-direction: column;
    text-align: left;
    margin-left: 0;
    padding: 0;
    margin-top: 17px;
  }
`;

const IconText = styled.div`
  display: flex;
  gap: 9px;
  margin-left: auto;

  @media ${breakpoints.mobile} {
    margin-left: 0;
  }
`;

const Reward = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: auto;

  @media ${breakpoints.mobile} {
    margin-left: 0;
  }
`;

const StepCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.tertiary380};
  border: 5px solid ${({ theme }) => theme.colors.tertiary750};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-24px, -50%);
  opacity: 1;

  &.step-complete {
    background: ${({ theme }) => theme.colors.primary700};
    border: 5px solid ${({ theme }) => theme.colors.tertiary750};
  }

  @media ${breakpoints.mobile} {
    width: 33px;
    height: 33px;
    top: 12px;
    transform: translate(-22px, 0);
  }
`;

const FlagIcon = styled(IconSvg)`
  stroke-width: 3px;
`;

const CompletedBox = styled(Box)`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  @media ${breakpoints.mobile} {
    margin-top: 8px;
  }
`;

CardFinal.defaultProps = {
  statusToggle: true,
};

export default CardFinal;
