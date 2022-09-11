import Box from "../Box/Box";
import Grid from "../Grid/Grid";
import React from "react";
import styled from "styled-components";
import Segment from "./Segment";
import check from "./icons/check.svg";
import x from "./icons/x.svg";

const StepsTracker = ({ values, headers, bigCircleIndex, children, containerHeight, bottom, className, hasPending, checkIcon, xIcon }) => {
  const stepCount = values.length;
  let templateColumns = "auto";
  templateColumns = stepCount - 1 > 0 ? `${templateColumns} repeat(${stepCount - 1}, 1fr auto)` : templateColumns;
  const currentCircle = Math.max(values.lastIndexOf(true), values.lastIndexOf(false));

  const elements = values.map((value, index) => (
    <Segment
      key={index}
      bigCircleIndex={bigCircleIndex}
      index={index}
      arr={values}
      value={value}
      nextStepValue={values[index + 1]}
      currentCircle={currentCircle}
      hasPending={hasPending}
      checkIcon={checkIcon}
      xIcon={xIcon}
    />
  ));

  return (
    <Box relative={1} flex={1} justifyContent="center" className={className}>
      <Container borderRadius="8px" bottom={bottom} width="1017px" height={containerHeight} bgColor="tertiary0">
        {children}
        <Grid columns={templateColumns} width="100%" justifyItems="end" alignItems="center">
          {elements}
        </Grid>
        <HeaderGrid columns={templateColumns} width="100%" justifyItems="end" alignItems="center">
          {headers}
        </HeaderGrid>
      </Container>
    </Box>
  );
};

const Container = styled(Box)`
  box-shadow: -15px 15px 45px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.tertiary0};
  position: relative;
  bottom: ${({ bottom }) => bottom};
  padding: 32px 55px 38px 55px;
`;

const HeaderGrid = styled(Grid)`
  margin-left: 20px;
`;

StepsTracker.defaultProps = {
  values: [],
  bigCircleIndex: [0, 1],
  containerHeight: "auto",
  bottom: "60px",
  checkIcon: check,
  xIcon: x
};

export default StepsTracker;
