import React, { useState, useRef } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Box from "../Box/Box";
import Text from "../Text/Text";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import { disabledControl } from "../properties";

const listItems = (options, onItemClick, selectedOptions) => {
  return options.map((option) => {
    const selected = selectedOptions.find((i) => i.value === option.value);
    return (
      <ListItem type="button" key={option.value} onClick={(e) => onItemClick(option, e)}>
        <Box gap="12px" flex>
          {option.icon && <Icon icon={option.icon} width="23px" />}
          {option.url && <StyledImg src={option.url} />}
          {option.label}
        </Box>
        {selected && <Icon icon="BsCheck" color="03Primary500" width="23px" />}
      </ListItem>
    );
  });
};

const MultiSelect = ({
  options,
  title,
  minWidthHeader,
  widthContainer,
  selectedOptions,
  onItemClick,
  disableOutsideClick,
  disabled,
  keepOpen,
  maxHeight,
}) => {
  const ref = useRef();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const hasSelection = selectedOptions?.length;
  const chevron = isMenuOpen ? "MdKeyboardArrowUp" : "MdKeyboardArrowDown";
  const _title = hasSelection ? selectedOptions.map(({ label }) => label).join(", ") : title;

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const close = () => setMenuOpen(false);
  const onClick = () => !keepOpen && close();

  useClickOutsideCallback(ref, disableOutsideClick ? () => {} : close);

  return (
    <Container ref={ref} disabled={disabled}>
      <Header borderColor={hasSelection && "01Secondary500"} onClick={toggleMenu} minWidthHeader={minWidthHeader}>
        <Text typography="body/small">{_title}</Text>
        <Icon icon={chevron} color="01Primary700" spacing="pr-2" />
      </Header>
      {isMenuOpen && (
        <ListPositioner widthContainer={widthContainer}>
          <ListContainer $maxHeight={maxHeight} onClick={onClick}>
            {listItems(options, onItemClick, selectedOptions)}
          </ListContainer>
        </ListPositioner>
      )}
    </Container>
  );
};

MultiSelect.defaultProps = {
  selectedOptions: []
};

const ListItem = styled.button`
  display: inline-flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  padding: 16px;
  line-height: 1.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  margin: inherit;
  border: none;
  background: inherit;
  font: inherit;
  color: inherit;
  text-align: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    background-color: ${({ theme }) => theme.colors["01Primary300"]};
  }
`;

const ListPositioner = styled.div`
  min-width: ${({ widthContainer }) => widthContainer && widthContainer};
  overflow: hidden;
  position: absolute;
  z-index: 10;
  background: ${({ theme }) => theme.colors["01Primary0"]};
  box-shadow: 0px 25px 15px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  top: 56px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${({ theme }) => theme.colors["01Primary700"]};
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors["01Primary200"]};
  border-radius: 8px;
  background: transparent;
  min-width: ${({ minWidthHeader }) => minWidthHeader && minWidthHeader};
  cursor: pointer;
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  & > div {
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 175px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  background: transparent;
  position: relative;
  display: inline-block;
  user-select: none;
  ${disabledControl}
`;

const ListContainer = styled.div`
  overflow-y: auto;
  max-height: ${({ $maxHeight }) => $maxHeight + "px" };
  color: ${({ theme }) => theme.colors["01Primary700"]};
  button:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors["01Primary200"]};
  }
`;

const StyledImg = styled.img`
  width: 23px;
  height: 23px;
`;

MultiSelect.defaultProps = {
  id: "",
  select: undefined,
  arrowUpIcon: null,
  arrowDownIcon: null,
  checkIcon: null,
  minWidthHeader: "237px",
  widthContainer: "274px",
  keepOpen: false,
  maxHeight: 280,
};

export default MultiSelect;
