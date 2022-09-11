import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  height: ${({ height }) => height}px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 50px;
`;

const Filler = styled.div`
  transition: width 1s ease-in-out;
  height: 100%;
  width: ${({ percent }) => percent}%;
  background-color:  ${({ bgColor }) => bgColor}};
  border-radius: inherit;
  text-align: right;
`;

const Label = styled.span`
  padding: 5px;
  color: white;
  font-weight: bold;
`;

const ProgressBar = ({ bgColor, percent, height, className }) => {
  return (
    <Container height={height} className={className}>
      <Filler bgColor={bgColor} percent={percent}>
        <Label/>
      </Filler>
    </Container>
  );
};

ProgressBar.defaultProps = {
  percent: 6,
  bgColor: "#5159C9",
  height: 4
};

ProgressBar.propTypes = {
  percent: propTypes.number,
  height: propTypes.number,
  bgColor: propTypes.string
};

export default ProgressBar;
