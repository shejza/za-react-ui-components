/* eslint-disable react/display-name */
import React, { useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import inputStates from "../../utils/input-states";
import { background, bgColor, bold, color, disabledControl } from "../properties";
import placeholderProps from "../../utils/placeholder-props";
import ValidationText from "../common/ValidationText";

const Input = styled(
  React.forwardRef(
    (
      {
        className,
        spacing,
        width,
        mdWidth,
        lgWidth,
        name,
        id,
        helperText,
        label,
        labelIcon,
        icon,
        iconColor = "01Primary700",
        alwaysShowValidation,
        onChange,
        onBlur,
        validationText,
        size,
        hideX,
        onClear,
        ...otherProps
      },
      ref
    ) => {
      const onChangeHandler = (e) => {
        if (onChange) onChange(e);
      };

      const onBlurHandler = (e) => {
        if (onBlur) onBlur(e);
      };

      const showValidation = alwaysShowValidation;

      return (
        <Box className={className} spacing={spacing} width={width} mdWidth={mdWidth} lgWidth={lgWidth}>
          {(label || labelIcon) && (
            <label htmlFor={id}>
              <Text variant="body" spacing="ml-1" color="01Primary700">
                {labelIcon && <Icon width="16px" spacing="mr-1" icon={labelIcon} />}
                {label}
              </Text>
            </label>
          )}
          <Box relative>
            {icon && <InputIcon color={iconColor} width="16px" icon={icon} inputSize={size} />}
            <StyledInput
              icon={icon}
              name={name}
              id={id}
              ref={ref}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              showValidation={showValidation}
              size={size}
              {...otherProps}
            />
            {!!onClear && !hideX && (
              <InputIcon onClick={onClear} color={iconColor} clearIcon width="16px" icon="IoIosClose" inputSize={size} />
            )}
          </Box>
          {!validationText && helperText && (
            <HelperText {...otherProps} showValidation={showValidation} spacing="pl-2">
              {helperText}
            </HelperText>
          )}
          {showValidation && validationText && (
            <ValidationText validationText={validationText} showValidation={showValidation} otherProps={otherProps} />
          )}
        </Box>
      );
    }
  )
)`
  display: inline-block;

  ${({ block }) =>
    block &&
    `
    opacity: 0.5;
    pointer-events: none;
    display: block;
  `}
`;

const InputIcon = styled(Icon)`
  position: absolute;
  left: ${({ inputSize }) => (inputSize === "sm" ? "14px" : "7px")};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors["error2"]};
  ${({ clearIcon }) =>
    clearIcon &&
    `
    left: unset;
    right: 1rem;
    cursor: pointer;
  `}
`;

const StyledInput = styled("input")`
  width: 100%;
  background: ${({ theme }) => theme.colors["01Primary50"]};
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors["01Primary300"]};
  box-sizing: border-box;
  border-radius: 12px;
  height: 56px;
  padding: 16px;
  ${inputStates}
  ${bold}
  ${color}
  ${bgColor}
  ${background}

 ${placeholderProps}

 &:focus {
    background: transparent;
    border-color: ${({ theme }) => theme.colors["01Primary300"]};
  }

  ${({ size }) =>
    size === "sm" &&
    `
    height: 44px;
    padding: 1rem;
  `}

  ${disabledControl}


  ${({ icon }) =>
    icon &&
    `
    padding-left: 40px;
  `}

  ${({ underline }) =>
    underline &&
    `
    min-height: 45px;
    background-color: transparent;
    border-bottom: 2px solid 44bb8c;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 0px;

    &:focus {
      border-bottom: 2px solid #2F80ED;
    }
  `}

  ${({ underline, invalid }) =>
    underline &&
    invalid &&
    `
    &:focus {
      border-bottom: 2px solid #f16d67;
    }
  `}

  ${({ invalid, showValidation, theme }) =>
    (invalid || showValidation) &&
    `
 
    border-color: ${theme.colors["error"]};
`}

  ${({ noBorder }) => noBorder && "border: none"}
`;

const HelperText = styled(Text)`
  color: #535a6a;
  ${disabledControl}
`;

Input.propTypes = {
  disabled: propTypes.bool,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  name: propTypes.string,
  id: propTypes.string,
  label: propTypes.oneOfType([propTypes.string, propTypes.node]),
  /** Valid icon name (see Icon component) */
  labelIcon: propTypes.string,
  invalid: propTypes.bool,
  valid: propTypes.bool,
  spacing: propTypes.string,
  icon: propTypes.string,
  underline: propTypes.bool,
  /** Text to display below the input field */
  helperText: propTypes.string,
};

Input.defaultProps = {
  width: "100%",
  color: "01Primary700",
};

/** @component */
export default Input;
