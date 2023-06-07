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
  color,
  bgColor,
  optionsBgColor,
  hoverColor,
  borderColor,
  optionsBoxMaxHeight,
  optionsBoxBorderRadius,
  optionsBoxShadow,
  optionHeight,
  optionDisplay,
  optionPadding,
  optionGap,
  topImageWidth,
  topImageHeight,
  topImageBorderRadius,
  topImageMarginLeft,
  topImageAlignSelf,
  imageWidth,
  imageHeight,
  imageBorderRadius,
  arrowBoxTop,
  arrowBoxRight,
  arrowBoxPointerEvents,
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
    <Box ref={ref} position="relative">
      <StyledBox spacing="px-2" bgColor={bgColor} open={open} display="flex" borderColor={borderColor}>
        {showImage && !!selected && !!selected?.[image] && <TopImage src={selected[image]} topImageWidth={topImageWidth} topImageHeight={topImageHeight} topImageBorderRadius={topImageBorderRadius} topImageMarginLeft={topImageMarginLeft} topImageAlignSelf={topImageAlignSelf} />}
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
          color={color}
          {...props}
        />
      </StyledBox>
      {hideClear && (
        <ArrowBox arrowBoxTop={arrowBoxTop} arrowBoxRight={arrowBoxRight} arrowBoxPointerEvents={arrowBoxPointerEvents}>
          <Icon color={color} icon={open ? "MdKeyboardArrowUp" : "MdKeyboardArrowDown"} width={imageWidth} />
        </ArrowBox>
      )}
      {open && (
        <OptionsWrapper bgColor={optionsBgColor} optionsBoxMaxHeight={optionsBoxMaxHeight} optionsBoxBorderRadius={optionsBoxBorderRadius} optionsBoxShadow={optionsBoxShadow}>
          {filteredOptions.map((opt, index) => (
            <Option
              key={index}
              onClick={() => onSelect(opt)}
              hoverColor={hoverColor}
              optionHeight={optionHeight}
              optionDisplay={optionDisplay}
              optionPadding={optionPadding}
              optionGap={optionGap}
            >
              {!!image && <Box width={imageWidth}><Image src={opt[image]} imageWidth={imageWidth} imageHeight={imageHeight} imageBorderRadius={imageBorderRadius} /></Box>}
              <Text color={color}>{opt?.[label]}</Text>
              {selected?.[valueKey] === opt?.[valueKey] && (
                <Icon spacing="ml-a" icon="check" color="03Primary500" width={imageWidth} />
              )}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </Box>
  );
};

const StyledBox = styled(Box)`
  border: 1px solid ${({ theme, borderColor }) => theme.colors[borderColor]};
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
  max-height: ${({ optionsBoxMaxHeight }) => optionsBoxMaxHeight};
  overflow-y: scroll;
  border-radius: ${({ optionsBoxBorderRadius }) => optionsBoxBorderRadius};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 99;
  box-shadow: ${({ optionsBoxShadow }) => optionsBoxShadow}; 
`;

const Option = styled(Box)`
  height: ${({ optionHeight }) => optionHeight};
  display: ${({ optionDisplay }) => optionDisplay};
  align-items: center;
  padding: ${({ optionPadding }) => optionPadding};
  cursor: pointer;
  gap: ${({ optionGap }) => optionGap};

  ${({ hoverColor, theme }) =>
    hoverColor &&
    `
    &:hover {
      background: ${theme.colors[hoverColor] || hoverColor};
    }
  `}
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors["01Primary300"]};
  }
`;

const Image = styled.img`
  width: ${({ imageWidth }) => imageWidth};
  height: ${({ imageHeight }) => imageHeight};
  border-radius: ${({ imageBorderRadius }) => imageBorderRadius};
`;

const TopImage = styled.img`
  width: ${({ topImageWidth }) => topImageWidth};
  height: ${({ topImageHeight }) => topImageHeight};
  border-radius: ${({ topImageBorderRadius }) => topImageBorderRadius};
  margin-left: ${({ topImageMarginLeft }) => topImageMarginLeft};
  align-self: ${({ topImageAlignSelf }) => topImageAlignSelf};
`;

const ArrowBox = styled(Box)`
  position: absolute;
  top: ${({ arrowBoxTop }) => arrowBoxTop};
  right: ${({ arrowBoxRight }) => arrowBoxRight};
  pointer-events: ${({ arrowBoxPointerEvents }) => arrowBoxPointerEvents};
`;

Select.defaultProps = {
  autocomplete: true,
  valueKey: "id",
  color: "01Primary700",
  bgColor: "01Primary110",
  optionsBgColor: "01Primary0",
  hoverColor: "01Primary0",
  borderColor: "01Primary300",
  optionsBoxMaxHeight: "180px",
  optionsBoxBorderRadius: "0 0 12px 12px",
  optionsBoxShadow: "0px 25px 15px rgba(0, 0, 0, 0.15);",
  optionHeight: "56px",
  optionDisplay: "flex",
  optionPadding: "0 1rem",
  optionGap: "12px",
  topImageWidth: "23px",
  topImageHeight: "23px",
  topImageBorderRadius: "50%",
  topImageMarginLeft: "8px",
  topImageAlignSelf: "center",
  imageWidth: "23px",
  imageHeight: "23px",
  imageBorderRadius: "50%",
  arrowBoxTop: "18px",
  arrowBoxRight: "20px",
  arrowBoxPointerEvents: "none",
};

export default Select;
