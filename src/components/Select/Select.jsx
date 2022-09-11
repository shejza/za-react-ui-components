import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import IconSvg from "../IconSvg/IconSvg";
import useSpacingProps from "../../utils/spacing-props";
import useWidthProps from "../../utils/width-props";
import selectLogic from "./selectLogic";

const INITIAL_STATE = {
  isListOpen: false,
  selectedItem: null,
  keyword: "",
};

const listItems = (props, state, selectItem) => {
  const { id, searchable } = props;
  const { keyword, options } = state;
  let tempList = [...options];
  const selectedItemValue = state.selectedItem?.value;

  if (keyword.length) {
    tempList = options.filter((item) =>
      item.label.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (tempList.length) {
    return tempList.map((item) => (
      <ListItem type="button" key={item.value} onClick={() => selectItem(item)}>
        {item.label}
        {item.value === selectedItemValue && <IconSvg icon="check" />}
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
    selectItem,
  } = state;

  const chevron = isListOpen ? "chevron-up" : "chevron-down";

  return (
    <Container {...props}>
      <Header type="button" onClick={toggleList}>
        <HeaderTitle>{placeholder}</HeaderTitle>
        <IconSvg icon={chevron} spacing="pr-4" />
      </Header>
      {isListOpen && (
        <ListPositioner>
          {searchable.length && (
            <SearchBar
              ref={searchField}
              placeholder={searchable[0]}
              onClick={stopPropagation}
              onChange={filterList}
            />
          )}
          <ListContainer>{listItems(props, state, selectItem)}</ListContainer>
        </ListPositioner>
      )}
    </Container>
  );
};

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
  ${"" /* max-height: 215px; */}
  border: 1px solid #dfdfdf;
  border-top: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  box-shadow: 0 2px 5px -1px #e8e8e8;
  background: inherit;
  text-align: left;
`;

const Header = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  line-height: 38px;
  cursor: default;
  cursor: pointer;

  height: 56px;

  border: 1px solid #bfbfcc;
  box-sizing: border-box;
  border-radius: 12px;

  overflow: visible;
  width: inherit;
  margin: inherit;
  padding: inherit;
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
  background: #fafafd;
  position: relative;
  display: inline-block;
  user-select: none;

  ${useSpacingProps}
  ${useWidthProps}
`;

const ListContainer = styled.div`
  ${"" /* overflow-y: scroll; */}
  ${"" /* max-height: 215px; */}
  padding: 15px 0;
`;

Select.defaultProps = {
  id: "",
  select: undefined,
  searchable: [],
  options: []
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
