import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import IconSvg from "../IconSvg/IconSvg";
import Tag from "../Tag/Tag";
import Box from "../Box/Box";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import selectLogic from "./selectLogic2";

const listItems = (props, state) => {
  const { searchable } = props;
  const { filteredOptions, onItemClick } = state;

  if (filteredOptions.length) {
    return filteredOptions.map((item) => (
      <ListItem type="button" key={item.value} onClick={(e) => onItemClick(item, e)}>
        {item.label}
      </ListItem>
    ));
  }

  return <ListItem>{searchable[1]}</ListItem>;
};

const stopPropagation = (e) => e.stopPropagation();

const Select = ({placeholder, ...props}) => {
  const state = selectLogic(props);
  const { searchable } = props;
  const {
    isListOpen,
    toggleList,
    filterList,
    searchField,
    onItemClick,
    selectedItem
  } = state;

  const chevron = isListOpen ? "chevron-up" : "chevron-down";
  let headerContent = placeholder;

  if(selectedItem.length){
    headerContent = <SelectedItems items={selectedItem} remove={onItemClick} />;
  }

  return (
    <Container {...props}>
      <Header onClick={toggleList}>
        <HeaderTitle>{headerContent}</HeaderTitle>
        <IconSvg icon={chevron} spacing="pr-4" />
      </Header>
      {isListOpen && (
        <ListPositioner>
          {searchable.length && (
            <SearchBar
              ref={searchField}
              placeholder={placeholder}
              onClick={stopPropagation}
              onChange={filterList}
            />
          )}
          <ListContainer>{listItems(props, state)}</ListContainer>
        </ListPositioner>
      )}
    </Container>
  );
};

const SelectedItems = ({ items, remove })=>(
  <Box flex wrap>
    {items.map(item => <Tag>{item.label} <IconSvg width='20px' pointer onClick={(e)=> remove(item, e)} icon='x'/></Tag>)}
  </Box>
);

const ListItem = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
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

  &:hover {
    background-color: #ffcc01;
    color: white;
  }
`;

const SearchBar = styled.input`
  background: inherit;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  border-bottom: 1px solid #dfdfdf;
  font-size: inherit;
`;

const ListPositioner = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 10;
  border: 1px solid #dfdfdf;
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px #e8e8e8;
  background: inherit;
  text-align: left;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 11px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  line-height: 38px;
  cursor: default;
  cursor: pointer;

  min-height: 56px;

  border: 1px solid #bfbfcc;
  box-sizing: border-box;
  border-radius: 12px;

  overflow: visible;
  width: inherit;
  margin: inherit;
  padding: 0px;
  background: inherit;
  font: inherit;
  line-height: normal;
  color: inherit;
  text-align: inherit;
`;

const HeaderTitle = styled.div`
  margin: 2px 20px;
  font-weight: bold;
`;

const Container = styled.div`
  ${useSpacingProps}
  ${useWidthProps}
  background: #fafafd;
  position: relative;
  display: inline-block;
  user-select: none;
  padding: 0px !important;
`;

const ListContainer = styled.div`
  padding: 15px 0;
`;

Select.defaultProps = {
  id: "",
  select: undefined,
  searchable: [],
  arrowUpIcon: null,
  arrowDownIcon: null,
  checkIcon: null,
};

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
