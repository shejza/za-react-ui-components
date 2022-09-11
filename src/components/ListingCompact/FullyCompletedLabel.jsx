import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import Box from "../Box/Box";
import { breakpoints } from "../../constants";

const FullyCompletedLabel = () => {
  return (
    <FullyBox flex bgColor="primary700" alignItems="center" gap="6px">
      <StyledIcon>
        <IconSvg icon="circle-check" width="18px" color="white" />
      </StyledIcon>
      <Text extraBold size="14px" lHeight="21px" color="white">
        Fully Completed!
      </Text>
    </FullyBox>
  );
};

const FullyBox = styled(Box)`
  white-space: nowrap;
  min-width: 152px;
  height: 42px;
  margin-right: 72px;
  border-radius: 8px;
  padding-left: 10px;
  @media ${breakpoints.tablet} {
    margin-right: 43px;
  }
`;
const StyledIcon = styled.div`
  svg {
    background: white;
    border-radius: 50%;

    path:nth-child(2) {
      color: #5fb974;
    }
  }
`;

export default FullyCompletedLabel;
