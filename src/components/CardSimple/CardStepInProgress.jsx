import React from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import TextMore from "../TextMore/TextMore";
import SparklesImage from "../assets/sparkles.svg";
import SparklesImage2 from "../assets/sparkles2.svg";
import StatusChallenge from "./StatusChallenge";
import Box from "../Box/Box";
import { breakpoints, fontWeights } from "../../constants";

const CardStepInProgress = ({
  title,
  tagText,
  statusToggle,
  description,
  reward,
  buttonStep,
  stepNum,
  totalNumSteps,
  onClick,
  isRejected,
  underReview,
  goNext,
  isClosed,
  disabled,
  isPrevious,
  isAbandoned,
  currentStep
}) => {
  return (
    <>
      <CardWrapper className={isPrevious && "closed-challenge"}>

        <StepCircle className={goNext && "step-next"}>

          {underReview ?
            <IconSvg icon="clock" color="tertiary0" width="16px" /> :
            !isRejected && !isClosed && !isPrevious ? (
              <Text size="18px" color="tertiary0" bold={+true}>
                {stepNum}
              </Text>
            ) : (
              <IconSvg icon={isRejected ? "sync" : "x"} color="tertiary0" width="16px" />
            )
          }
        </StepCircle>
        <LeftPart>
          <StepsText color="secondary450">
            Step {stepNum} of {totalNumSteps}
          </StepsText>
          <TextTag>
            <TitleText size="24px" color="secondary500" bold={+true}>
              <StyledTitle>
                {title}
              </StyledTitle>
              {statusToggle && <StyledTag>{tagText}</StyledTag>}
            </TitleText>
          </TextTag>
          <TextMore description={description} maxWidth={"auto"} />
        </LeftPart>

        <RightPart>
          <Reward>
            <Text size="15px" color="secondary400">
              Reward
            </Text>
            <IconText>
              <IconSvg width="16px" icon="star" />
              <Text size="16px" color="accent550" extraBold>
                {reward} $THRIVE
              </Text>
            </IconText>
          </Reward>
          {!isClosed ? (
            <>
              {isRejected && <Button
                bold={+true}
                borderRadius="50px"
                bgColor="primary700"
                kind="solid"
                heightSize="44px"
                onClick={onClick}
                spacing="mt-4 px-5"
                disablePointerEvents={isAbandoned}
              >
                Retake Step {stepNum}
              </Button>}
              {isRejected  &&
                <Box gap="7px" alignItems="center" justifyContent="flex-end" spacing="mt-4" flex={+true}>
                  <Text size="16px" color="destructive500">
                  Contribution reviewed
                  </Text>
                  <IconSvg
                    width="16px"
                    color="destructive500"
                    icon="alert-triangle" />
                </Box>
              }
              {underReview  &&
                <StatusChallenge
                  tooltipMsg="Your contribution will be reviewed within the next 24 hours."
                  color="success150"
                  text="Contribution is under review"
                  icon="alert-circle"
                />
              }

              {!isRejected && !underReview && !isPrevious && <Button
                bold={+true}
                borderRadius="40px"
                spacing="px-5"
                bgColor={disabled ? "tertiary380" : "primary700"}
                kind="solid"
                heightSize="44px"
                onClick={onClick}
                disablePointerEvents={isAbandoned}
              >
                {buttonStep}
              </Button>}
            </>
          ) : (
            <>
              {!isPrevious && <Text color="secondary300" size="16px" bold={+true}>
                Closed
              </Text>}
            </>
          )}
        </RightPart>
      </CardWrapper>
      <StepLine />
    </>
  );
};

const LeftPart = styled.div`
  flex: 1;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 167px;
  border: 1px solid ${({ theme }) => theme.colors.tertiary200};
  box-sizing: border-box;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.tertiary0};
  padding: 24px 24px 21px 58px;
  position: relative;

  &.stepCompleted {
    padding: 24px 24px 26px 58px;
    background: url(${SparklesImage}) no-repeat 97%, url(${SparklesImage2}) no-repeat 95%,
      ${({ theme }) => theme.colors.tertiary0};
  }

  &.closed-challenge {
    opacity: 0.5;
  }
  .success150 {
    circle,
    path {
      stroke: ${({ theme }) => theme.colors.success150};
    }
  }

  @media ${breakpoints.mobile} {
    flex-direction: column;
    padding: 20px 21px 24px 32px;

    ${Button}{
      width: 100%;
    }
  }
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 24px;
  text-align: right;
  margin-left: auto;

  @media ${breakpoints.mobile} {
    padding: 0;
    margin-left: 0;
    margin-right: 11px;
    margin-top: 44px;
    align-items: flex-start;
  }
`;

const IconText = styled.div`
  display: flex;
  gap: 9px;
`;

const TextTag = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const Reward = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: auto;

  @media ${breakpoints.mobile} {
    margin-left: 0;
    margin-bottom: 18px;
    gap: 12px;
    align-items: flex-start;
  }
`;

const StepCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background:  ${({ theme }) => theme.colors.tertiary380};
  border: 5px solid ${({ theme }) => theme.colors.tertiary750};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-24px, -50%);

  @media ${breakpoints.mobile} {
    width: 33px;
    height: 33px;
    transform: translate(-22px, 0);
    top: 30px;
  }

  &.step-complete {
    background: ${({ theme }) => theme.colors.primary700};
    border: 5px solid ${({ theme }) => theme.colors.tertiary750};
  }

  &.step-next {
    background: ${({ theme }) => theme.colors.secondary550};
  }
  &.step-rejected {
    background: ${({ theme }) => theme.colors.destructive500};
  }
`;

const StepLine = styled.div`
  background: ${({ theme }) => theme.colors.tertiary370};
  width: 4px;
  height: 16px;
  position: relative;
  left: 41px;

  &.step-line-active {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;

const StyledTitle = styled.span`
  margin-right: 8px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight:${fontWeights.bold};
  font-size: 24px;
  line-height: 30px;
`;

const StyledTag = styled(Tag)`
  margin: 0;
`;

const StepsText = styled(Text)`
  font-size: 16px;
  height: 21px;

  @media ${breakpoints.mobile} {
    font-size: 14px;
    margin-bottom: 5.5px;
  }
`;

const TitleText = styled(Text)`
  font-size: 24px;

  @media ${breakpoints.mobile} {
    font-size: 20px;
  }
`;

CardStepInProgress.defaultProps = {
  statusToggle: true,
};

export default CardStepInProgress;
