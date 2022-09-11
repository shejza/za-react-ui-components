import React, { useState, useRef } from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";

const SelectV2 = ({ options, value, onChange, placeholder }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelected] = useState(value);
  const toggle = () => setOpen((prev) => !prev);
  const icon = open ? "chevron-up" : "chevron-down";
  const close = () => setOpen(false);
  const selectOption = (event) => {
    const { value } = event.target.dataset;
    setSelected(value);
    onChange(value);
  };

  useClickOutsideCallback(ref, close);

  const selected = options.find(({ value }) => value == selectedValue);
  const text = selected?.label || placeholder;

  return (
    <Container onClick={toggle} relative ref={ref}>
      <InputIcon width="20px" icon={icon} />
      <StyledInput disabled value={text} />
      {open && <OptionsPanel options={options} onClick={selectOption} />}
    </Container>
  );
};

const StyledInput = styled.input`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary500};
`;

const OptionsPanel = ({ options = [], onClick }) => {
  if (!options.length) {
    return null;
  }

  return (
    <OuterContainer>
      <div onClick={onClick}>
        {options.map(({ label, value }) => (
          <Option key={label} data-value={value} data-label={label}>
            {label}
          </Option>
        ))}
      </div>
    </OuterContainer>
  );
};

const InputIcon = styled(IconSvg)`
  position: absolute;
  right: 7px;
  top: 50%;
  transform: translateY(-50%);
  color: #535a6a;
  stroke-width: 4px;
  color: ${({ theme }) => theme.colors.secondary500};
`;

const Option = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary50};
`;

const OuterContainer = styled.div`
  left: 0;
  position: absolute;
  z-index: 10;
  top: 115%;
  border: 1px solid #E9E9E9;
  box-shadow: 0px 15px 8px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 97%;
  min-width 171px;
  overflow: scroll;
  max-height: 279px;
  overflow-x: hidden;
  background: #FFFFFF;
  box-sizing: border-box;

  ${Option} {
    padding: 1em;
  }

  ${Option}:hover {
    cursor: pointer;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.tertiary100};
    border-radius: 4px;
  }
`;

const Container = styled.div`
  min-height: 56px;
  height: auto;
  width: 100%;
  position: relative;

  padding-left: 1em;
  background: ${({ theme }) => theme.colors.tertiary0};
  border: 1px solid #bfbfcc;
  box-sizing: border-box;
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;
  }

  input {
    width: 100%;
    background: ${({ theme }) => theme.colors.tertiary0};
    border: 1px solid #e4e4ed;
    box-sizing: border-box;
    border-radius: 12px;
    height: 56px;
    padding-left: 1em;
    border: none;
  }

  input:focus {
    outline: none;
  }
`;

SelectV2.defaultProps = {
  options: [],
  onChange: () => {},
  placeholder: "",
};

export default SelectV2;
