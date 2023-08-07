import React, { useState, useRef } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Box from "../Box/Box";
import Text from "../Text/Text";
import useClickOutsideCallback from "../hooks/useClickOutsideCallback";
import { MainWrapper, disabledControl } from "../properties";

const listItems = (options, onItemClick, selectedOptions, displayListItem, ...props) => {
  return options.map((option) => {
    const selected = selectedOptions.find((i) => i.value === option.value);
    return (
      <ListItem
        type="button"
        key={option.value}
        displayListItem={displayListItem}
        onClick={(e) => onItemClick(option, e)}
        {...props}
      >
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
  headerMinWidth,
  widthContainer,
  selectedOptions,
  onItemClick,
  disableOutsideClick,
  disabled,
  keepOpen,
  maxHeight,
  displayListItem,
  ...props
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
      <Header
        borderColor={hasSelection && "01Secondary500"}
        onClick={toggleMenu}
        headerMinWidth={headerMinWidth}
        {...props}
      >
        <Text typography="body/small">{_title}</Text>
        <Icon icon={chevron} color="01Primary700" spacing="pr-2" />
      </Header>
      {isMenuOpen && (
        <ListPositioner widthContainer={widthContainer} {...props}>
          <ListContainer $maxHeight={maxHeight} onClick={onClick} {...props}>
            {listItems(options, onItemClick, selectedOptions, displayListItem)}
          </ListContainer>
        </ListPositioner>
      )}
    </Container>
  );
};

MultiSelect.defaultProps = {
  selectedOptions: [],
};

const ListItem = styled.button`
  display: ${({ listItemDisplay }) => listItemDisplay || "flex"};
  justify-content: ${({ listItemJustifyContent }) => listItemJustifyContent || "space-between"};
  overflow: ${({ listItemOverflow }) => listItemOverflow || "hidden"};
  width: ${({ listItemWidth }) => listItemWidth || "100%"};
  padding: ${({ listItemPadding }) => listItemPadding || "16px"};
  line-height: ${({ listItemLineHeight }) => listItemLineHeight || "1.6rem"};
  white-space: ${({ listItemWhiteSpace }) => listItemWhiteSpace || "nowrap"};
  text-overflow: ${({ listItemTextOverflow }) => listItemTextOverflow || "ellipsis"};
  cursor: ${({ listItemCursor }) => listItemCursor || "pointer"};
  margin: ${({ listItemMargin }) => listItemMargin || "inherit"};
  border: ${({ listItemBorder }) => listItemBorder || "none"};
  background: ${({ listItemBackground }) => listItemBackground || "inherit"};
  font: ${({ listItemFont }) => listItemFont || "inherit"};
  color: ${({ listItemColor }) => listItemColor || "inherit"};
  text-align: ${({ listItemTextAlign }) => listItemTextAlign || "inherit"};
  font-weight: ${({ listItemFontWeight }) => listItemFontWeight || "600"};
  font-size: ${({ listItemFontSize }) => listItemFontSize || "14px"};
  line-height: ${({ listItemLineHeight }) => listItemLineHeight || "21px"};

  &:hover {
    background-color: ${({ theme }) => theme.colors["01Primary300"]};
  }
`;

const ListPositioner = styled.div`
  min-width: ${({ widthContainer }) => widthContainer && widthContainer};
  overflow: ${({ ListPositionerOverflow }) => ListPositionerOverflow || "hidden"};
  position: ${({ ListPositionerPosition }) => ListPositionerPosition || "absolute"};
  z-index: ${({ ListPositionerZIndex }) => ListPositionerZIndex || "10"};
  background: ${({ theme }) => theme.colors["01Primary0"]};
  box-shadow: ${({ listPositionerBoxShadow }) => listPositionerBoxShadow || "0px 25px 15px rgba(0, 0, 0, 0.15))"};
  border-radius: ${({ ListPositionerBorderRadius }) => ListPositionerBorderRadius || "12px"};
  top: ${({ ListPositionerTop }) => ListPositionerTop || "56px"};
`;

const Header = styled.div`
  display: ${({ headerDisplay }) => headerDisplay && headerDisplay};
  align-items: ${({ headerAlignItems }) => headerAlignItems && headerAlignItems};
  justify-content: ${({ headerJustifyContent }) => headerJustifyContent && headerJustifyContent};
  position: ${({ headerPosition }) => headerPosition && headerPosition};
  color: ${({ theme, headerColor }) => theme.colors[headerColor]};
  padding: ${({ headerPadding }) => headerPadding && headerPadding};
  border: 1px solid ${({ theme }) => theme.colors["01Primary200"]};
  border-radius: ${({ headerBorderRadius }) => headerBorderRadius && headerBorderRadius};
  background: ${({ headerBackground }) => headerBackground && headerBackground};
  min-width: ${({ headerMinWidth }) => headerMinWidth && headerMinWidth};
  cursor: ${({ headerCursor }) => headerCursor && headerCursor};
  border-color: ${({ theme, headerBorderColor }) => theme.colors[headerBorderColor]};
  & > div {
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 175px;
    overflow: hidden;
  }
`;

const Container = styled(MainWrapper)`
  background: ${({ theme }) => theme.colors["01Primary110"]};
  border-radius: 8px;
  position: relative;
  display: inline-block;
  user-select: none;
  ${disabledControl}
`;

const ListContainer = styled.div`
  overflow-y: auto;
  max-height: ${({ $maxHeight }) => $maxHeight + "px"};
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
  headerDisplay: "flex",
  headerAlignItems: "center",
  headerJustifyContent: "space-between",
  headerPosition: "relative",
  headerColor: "01Primary700",
  headerPadding: "10px 16px",
  headerBorderRadius: "8px",
  headerBackground: "transparent",
  headerMinWidth: "237px",
  headerCursor: "pointer",

  widthContainer: "274px",
  keepOpen: false,
  maxHeight: 280,
  listItemDisplay: "flex",
};

export default MultiSelect;
