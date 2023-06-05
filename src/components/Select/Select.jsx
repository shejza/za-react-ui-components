import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import Icon from "../Icon/Icon";
import Input from "../Input/Input";
import Text from "../Text/Text";

const Select = ({
  autocomplete,
  value,
  valueKey,
  options,
  label,
  onChange,
  image,
  disabled,
  hideX,
  placeholder,
  showImage,
  bgColor = "01Primary110",
  ...props
}) => {
  const ref = useRef(null);
  const selected = options?.find((obj) => obj?.[valueKey] == value);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(selected?.[label] || "");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const hideClear = !search || disabled || !autocomplete || hideX;

  const onSerchChange = (e) => {
    const val = e.target.value;
    setOpen(true);
    setSearch(val);
    const filter = options.filter((obj) => obj?.[label].toLowerCase().includes(val.toLowerCase()));
    setFilteredOptions(filter);
  };

  const onSelect = (opt) => {
    setOpen(false);
    onChange(opt);
    setFilteredOptions(options);
  };

  const onClearSearch = () => {
    setOpen(true);
    setSearch("");
    setFilteredOptions(options);
  };

  const toggle = () => setOpen(!open);
  const close = () => {
    setOpen(false);
    if (open) {
      if (value && search !== selected?.[label]) {
        setSearch(selected?.[label]);
      } else if (!value) {
        setSearch("");
        setFilteredOptions(options);
      }
    }
  };

  useClickOutsideCallback(ref, close);

  useEffect(() => {
    if (value) {
      setSearch(selected?.[label] || "");
    }
  }, [value, options]);

  return (
    <Box ref={ref} relative>
      <StyledBox spacing="px-2" bgColor={bgColor} open={open} flex>
        {showImage && !!selected && !!selected?.[image] && <TopImage src={selected[image]} />}
        <StyledInput
          value={search || placeholder}
          onChange={onSerchChange}
          bgColor={bgColor}
          readOnly={!autocomplete}
          onClick={toggle}
          open={open}
          onClear={onClearSearch}
          hideX={hideClear}
          disabled={disabled}
          {...props}
        />
      </StyledBox>
      {hideClear && (
        <ArrowBox>
          <Icon color="01Primary700" icon={open ? "MdKeyboardArrowUp" : "MdKeyboardArrowDown"} />
        </ArrowBox>
      )}
      {open && (
        <OptionsWrapper bgColor="01Primary0">
          {filteredOptions.map((opt, index) => (
            <Option key={index} onClick={() => onSelect(opt)}>
              {!!image && <Box width="23px">{!!opt?.[image] && <Image src={opt[image]} />}</Box>}
              <Text color="01Primary700">{opt?.[label]}</Text>
              {/* {selected?.[valueKey] === opt?.[valueKey] && (
                <IconSvg spacing="ml-a" icon="check" color="03Primary500" width="23px" />
              )} */}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </Box>
  );
};

const StyledBox = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors["01Primary300"]};
  border-radius: ${({ open }) => (open ? "12px 12px 0 0" : "12px")};
`;

const StyledInput = styled(Input)`
  & > div > input {
    border: none;
    padding-left: 8px;

    &:focus,
    &:hover {
      border: none;
    }

    &:read-only {
      cursor: pointer;
    }
  }
`;

const OptionsWrapper = styled(Box)`
  max-height: 180px;
  overflow-y: scroll;
  border-radius: 0 0 12px 12px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: 0px 25px 15px rgba(0, 0, 0, 0.15);
`;

const Option = styled(Box)`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  gap: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors["01Primary300"]};
  }
`;

const Image = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
`;

const TopImage = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin-left: 8px;
  align-self: center;
`;

const ArrowBox = styled(Box)`
  position: absolute;
  top: 18px;
  right: 20px;

  pointer-events: none;
`;

Select.defaultProps = {
  autocomplete: true,
  valueKey: "id",
};

export default Select;
