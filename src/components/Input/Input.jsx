import React, { useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import Box from "../Box/Box";
import Text from "../Text/Text";
import Icon from "../IconSvg/IconSvg";
import { fontSizes, spacings, controlsPadding } from "../../constants";
import inputStates from "../../utils/input-states";
import { bold } from "../properties";
import placeholderProps from "../../utils/placeholder-props";
import IconSvg from "../IconSvg/IconSvg";

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
        alwaysShowValidation,
        onChange,
        onBlur,
        validationText,
        size,
        ...otherProps
      },
      ref
    ) => {
      const [wasTouched, setWasTouched] = useState(false);

      const onChangeHandler = (e) => {
        if (onChange) onChange(e);
      };

      const onBlurHandler = (e) => {
        setWasTouched(true);
        if (onBlur) onBlur(e);
      };

      const showValidation = wasTouched || alwaysShowValidation;

      return (
        <Box className={className} spacing={spacing} width={width} mdWidth={mdWidth} lgWidth={lgWidth}>
          {(label || labelIcon) && (
            <label htmlFor={id}>
              <Text variant="body" spacing="ml-1">
                {labelIcon && <Icon width="16px" spacing="mr-1" icon={labelIcon} />}
                {label}
              </Text>
            </label>
          )}
          <Box relative>
            {icon && <InputIcon width="16px" icon={icon} inputSize={size} />}
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
          </Box>
          {!validationText && helperText && (
            <HelperText {...otherProps} showValidation={showValidation} spacing="pl-2">
              {helperText}
            </HelperText>
          )}
          {showValidation && validationText && (
            <Box flex={+true} alignItems="center" gap="8px" color="#f16d67">
              <IconSvg width="16px" icon="alert-triangle"/>
              <ValidationText {...otherProps} showValidation={showValidation}>
                {validationText}
              </ValidationText>
            </Box>
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
  left: ${({inputSize}) => inputSize === "sm" ? "14px" : "7px"};
  top: 50%;
  transform: translateY(-50%);
  color: #535a6a;
`;

const StyledInput = styled("input")`
  width: 100%;
  background: #fafafd;
  font-size: ${fontSizes.body};
  border: 1px solid #C3C4D4;
  box-sizing: border-box;
  border-radius: 12px;
  height: 56px;
  padding: ${controlsPadding.sm};
  ${inputStates}
  ${bold}

 ${placeholderProps}

  ${({ size }) =>
    size === "sm" &&
    `
    height: 44px;
    padding: ${spacings[1]}em;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
  }


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

  ${({ noBorder }) => noBorder && "border: none"}
`;

const HelperText = styled(Text)`
  color: #535a6a;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;
const ValidationText = styled(Text)`
  ${({ disabled }) => disabled && " opacity: 0.5; pointer-events: none;"}

  ${({ validationAbsolute }) => validationAbsolute && "position: absolute;"}

  color: #f16d67;
  text-align: left;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  gap: 8px; 
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
};

/** @component */
export default Input;
