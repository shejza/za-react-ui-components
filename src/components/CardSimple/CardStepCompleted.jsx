import React from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import Text from "../Text/Text";
import Tag from "../Tag/Tag";
import TextMore from "../TextMore/TextMore";
import Box from "../Box/Box";
import { breakpoints, fontWeights } from "../../constants";
import { useMobile } from "../hooks/useMedia";

const CardStepCompleted = ({
  title,
  tagText,
  statusToggle,
  description,
  reward,
  stepNum,
  totalNumSteps,
  SparklesImageSimple,
  SparklesImageSimple2,
  nextActiveLine
}) => {
  const isMobile = useMobile();

  return (
    <>
      <CardWrapper
        SparklesImageSimple={SparklesImageSimple}
        SparklesImageSimple2={SparklesImageSimple2}
        className="stepCompleted"
      >
        <StepCircle className="step-complete">
          <IconSvg width="14px" icon="check2" color="tertiary0" />
        </StepCircle>
        <LeftPart>
          <StepsText size="16px" color="secondary450">
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
            <Text size="14px" color="secondary400">
              Earned
            </Text>
            <IconText>
              <IconSvg width="20px" icon="star" />
              <Text size="16px" color="accent550" extraBold>
                {reward} $THRIVE
              </Text>
            </IconText>
          </Reward>

          <Box gap="10px" alignItems="center" justifyContent="flex-end" flex={+true}>
            <IconSvg width="18px" icon="circle-check" color="success500" />
            <Text size="16px" extraBold>
              Completed!
            </Text>
            {!isMobile && <IconSvg width="24px" icon="cheers" />}
          </Box>
        </RightPart>
      </CardWrapper>
      <StepLine className={nextActiveLine && "step-line-active" }/>
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

  @media ${breakpoints.mobile} {
    flex-direction: column;
    padding: 20px 21px 24px 32px;
  }

  &.stepCompleted {
    padding: 24px 24px 26px 58px;
    background: ${({ SparklesImageSimple, SparklesImageSimple2, theme })=>  `
      url(${SparklesImageSimple}) no-repeat 76%,
      url(${SparklesImageSimple2}) no-repeat 85%,
      ${theme.colors.tertiary0};
      `}

    @media ${breakpoints.mobile} {
      padding: 20px 21px 24px 32px;
      background: ${({ SparklesImageSimple, theme })=>  `
      url(${SparklesImageSimple}) no-repeat right bottom,
      ${theme.colors.tertiary0};
      `}
    }
  }

  .success150 {
    circle,
    path {
      stroke: ${({ theme }) => theme.colors.success150};
    }
  }
`;

const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 24px;
  min-width: 210px;
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
  background: ${({ theme }) => theme.colors.secondary550};
  border: 5px solid ${({ theme }) => theme.colors.tertiary750};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-24px, -50%);

  &.step-complete {
    background: ${({ theme }) => theme.colors.primary700};
    border: 5px solid ${({ theme }) => theme.colors.tertiary750};
  }

  &.step-next {
    background: ${({ theme }) => theme.colors.tertiary380};
  }

  @media ${breakpoints.mobile} {
    width: 33px;
    height: 33px;
    transform: translate(-22px, 0);
    top: 30px;
  }
`;

const StepLine = styled.div`
  background: ${({ theme }) => theme.colors.tertiary370};
  width: 4px;
  height: 16px;
  left: 41px;
  position: relative;

  &.step-line-active {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;

const StyledTitle = styled.span`
  margin-right: 8px;
  font-family: 'Outfit';
  font-style: normal;
  font-weight: ${fontWeights.bold};
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

export default CardStepCompleted;
