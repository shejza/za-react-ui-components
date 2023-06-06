/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import Text from "../Text/Text";
import { disabledControl } from "../properties";
import Icon from "../Icon/Icon";

const ValidationText = ({ showValidation, validationText, otherProps }) => {
  return (
    <Box display="flex" alignItems="center" gap="8px" color="error2" spacing="mt-2">
      <Icon width="14px" icon="BsFillExclamationTriangleFill" height="21px" />
      <ValidationTextWrapper {...otherProps} showValidation={showValidation}>
        {validationText}
      </ValidationTextWrapper>
    </Box>
  );
};

const ValidationTextWrapper = styled(Text)`
  ${disabledControl}
  ${({ validationAbsolute }) => validationAbsolute && "position: absolute;"}
  color: ${({ theme }) => theme.colors["error2"]};
  text-align: left;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: -2px;
`;

export default ValidationText;
