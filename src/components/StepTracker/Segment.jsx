import React from "react";
import Line from "./Line";
import Circle from "./Circle";

const NON_EMPTY_VALUES = [true, false, "ongoing"];

const Segment = ({ value, index, arr, bigCircleIndex, nextStepValue, currentCircle, hasPending, checkIcon, xIcon }) => {
  const isFull = NON_EMPTY_VALUES.includes(value);
  const isOngoing = value === "ongoing";
  const isLineNextActive = NON_EMPTY_VALUES.includes(nextStepValue);
  const isFirst = index === 0;
  const isLast = index === arr.length - 1;
  const isBig = bigCircleIndex.includes(index) || isLast;
  const error = value == false;
  let hasNextLineError = error;
  let className = "empty";
  className = error ? "error" : className;
  className = isFull && !error ? "success" : className;

  return (
    <>
      <Circle
        key={index}
        className={className}
        index={index}
        big={isBig}
        full={isFull}
        ongoing={isOngoing}
        first={isFirst}
        error={error}
        isLast={isLast}
        isLineNextActive={isLineNextActive}
        hasNextLineError={hasNextLineError}
        currentCircle={currentCircle}
        checkIcon={checkIcon}
        xIcon={xIcon}
      />
      <Line
        key={index + "l"}
        isLast={isLast}
        isLineNextActive={isLineNextActive}
        hasNextLineError={hasNextLineError}
        hasPending={hasPending}
      />
    </>
  );
};

Segment.defaultProps = {
  bigCircleIndex: []
};

export default Segment;
