import React from "react"
import CardStepCompleted from "./CardStepCompleted";
import CardStepInProgress from "./CardStepInProgress";
import styled from "styled-components";
import { breakpoints } from "../../constants";

const CardSimple = ({
  title,
  tagText,
  statusToggle,
  description,
  reward,
  buttonStep,
  stepNum,
  totalNumSteps,
  onClick,
  stepCompleted,
  isRejected,
  underReview,
  goNext,
  isClosed,
  SparklesImageSimple,
  SparklesImageSimple2,
  disabled,
  isPrevious,
  isAbandoned,
  index,
  nextActiveLine,
  currentStep
}) => {
  return (
    <Container>
      { index === 0 &&  <FirstStepLine className={stepCompleted && "step-line-active"} />}
      {!stepCompleted ? (
        <CardStepInProgress
          title={title}
          tagText={tagText}
          statusToggle={statusToggle}
          description={description}
          reward={reward}
          buttonStep={buttonStep}
          onClick={onClick}
          stepNum={stepNum}
          totalNumSteps={totalNumSteps}
          isRejected={isRejected}
          underReview={underReview}
          goNext={goNext}
          isClosed={isClosed}
          disabled={disabled}
          isPrevious={isPrevious}
          isAbandoned={isAbandoned}
          nextActiveLine={nextActiveLine}
          currentStep={currentStep}

        />
      ) : (
        <CardStepCompleted
          title={title}
          tagText={tagText}
          statusToggle={statusToggle}
          description={description}
          reward={reward}
          stepNum={stepNum}
          totalNumSteps={totalNumSteps}
          isRejected={isRejected}
          underReview={underReview}
          goNext={goNext}
          SparklesImageSimple={SparklesImageSimple}
          SparklesImageSimple2={SparklesImageSimple2}
          nextActiveLine={nextActiveLine}
        />
      )}
    </Container>
  );
};

const Container= styled.div`
 position: relative;
 width: 100%;
`
const FirstStepLine = styled.div`
  background: ${({ theme }) => theme.colors.tertiary370};
  width: 4px;
  height: 16px;
  position: absolute;
  left: 41px;
  top: -32px;
  transform: translate(0, 105%);
  @media ${breakpoints.desktop} {
    height: 24px;
    top: -48px;
  }
  &.step-line-active {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;

CardSimple.defaultProps = {
  statusToggle: true,
};

export default CardSimple;
