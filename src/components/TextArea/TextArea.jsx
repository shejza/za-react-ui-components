import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Box from "../Box/Box";
import { fontSizes, lineHeight, controlsPadding } from "../../constants";
import { color, borderRadius, bold, bgColor, borderColor, marginBottom } from "../properties";
import inputStates from "../../utils/input-states";
import placeholderProps from "../../utils/placeholder-props";

const Textarea = ({ className, actions, rows, placeholder, onChange, value, spacing, label, marginBottom, ...otherProps }) => (
  <Box className={className} spacing={spacing}>
     {(label) && (
        <LabelStyled marginBottom={marginBottom}>
            {label}
        </LabelStyled>
      )}
    <MainTextArea
      onChange={onChange}
      rows={rows}
      placeholder={placeholder}
      actions={actions}
      value={value}
      {...otherProps}
    />
    {actions && <BottomTextArea>{actions}</BottomTextArea>}
  </Box>
);

const MainTextArea = styled("textarea")`
  box-sizing: border-box;
  font-size: ${fontSizes.body};
  padding: ${controlsPadding.sm};
  background-color: #fafafd;
  border: 1px solid #cacac7;
  vertical-align: top;
  width: 100%;
  resize: none;
  ${borderRadius}
  line-height: ${lineHeight};
  transition: background-color 200ms ease-in-out;
  ${bold}

  ${color}
  ${inputStates}
  
  ${placeholderProps}
  ${borderColor}
  ${bgColor}
`;

const BottomTextArea = styled("div")`
  background-color: #fafafd;
  border: 1px solid #cacac7;
  border-top: 0;
  width: 100%;
  resize: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const LabelStyled= styled.label`
  display: block;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #33343D;
  ${marginBottom}
`

Textarea.propTypes = {
  onChange: propTypes.func,
  placeholder: propTypes.string,
  actions: propTypes.node,
  rows: propTypes.number,
  value: propTypes.string,
  borderRadius: propTypes.string,
};

Textarea.defaultProps = {
  onChange: () => {},
  borderRadius: " 12px",
  rows: 4,
  invalid: false,
  marginBottom: "16px"
};

export default Textarea;
