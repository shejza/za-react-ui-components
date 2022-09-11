import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { spacings } from "../../constants";
import Box from "../Box/Box";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";
import useSpacingProps from "../../utils/spacing-props";

const Select = styled(
  React.forwardRef(
    (
      {
        className,
        spacing,
        children,
        onChange,
        label,
        width,
        mdWidth,
        lgWidth,
        labelIcon,
        id,
        ...otherProps
      },
      ref
    ) => (
      <Box
        spacing={spacing}
        className={className}
        relative
        width={width}
        mdWidth={mdWidth}
        lgWidth={lgWidth}
      >
        {(label || labelIcon) && (
          <InputLabel for={id}>
            <Text variant="body" spacing="ml-1">
              {labelIcon && <IconSvg spacing="mr-1" icon={labelIcon} />}
              {label}
            </Text>
          </InputLabel>
        )}
        <Box relative>
          <CaretIcon icon="chevron-down" />
          <StyledSelect ref={ref} id={id} onChange={onChange} {...otherProps}>
            {children}
          </StyledSelect>
        </Box>
      </Box>
    )
  )
)``;

const InputLabel = styled("label");

const CaretIcon = styled(IconSvg)`
  position: absolute;
  bottom: 13px;
  right: 16px;
  font-size: 12px;
  pointer-events: none;
`;

const StyledSelect = styled("select")`
  display: block;
  font-size: 16px;
  line-height: 18px;
  width: 100%;
  max-width: 100%;
  padding-left: ${spacings[3]}rem;
  padding-right: ${spacings[6]}rem;
  background: #FAFAFD;
  border: 1px solid #BFBFCC;
  box-sizing: border-box;
  border-radius: 12px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  height: 56px;
  outline: none;
  background-repeat: no-repeat, repeat;
  ${useSpacingProps}

  &::-ms-expand {
    display: none;
  }
  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #aaa;
    color: #222;
    outline: none;
  }
`;

Select.propTypes = {
  spacing: propTypes.string,
  icon: propTypes.string,
  onChange: propTypes.func,
  label: propTypes.string,
  width: propTypes.string,
  mdWidth: propTypes.string,
  lgWidth: propTypes.string,
  labelIcon: propTypes.string,
};

Select.defaultProps = {};

const SelectOption = ({ className, children, value, ...otherProps }) => (
  <option value={value} className={className} {...otherProps}>
    {children}
  </option>
);

export { SelectOption };

/** @component */
export default Select;
