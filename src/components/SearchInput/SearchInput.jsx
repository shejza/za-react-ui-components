import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconSvg from "../IconSvg/IconSvg";

const SearchInput = ({ placeholder, onSearchChange }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [search, setSearch] = useState("");

  const _onChange = (event) => {
    setSearch(event.currentTarget.value);
    onSearchChange(event.currentTarget.value);
  };

  const onClickSearch = () => {
    setShowSearchInput(true);
  };

  const clearText = () => {
    setSearch("");
  };

  return (
    <>
      <Container flexDirection={showSearchInput && "row-reverse"} width={showSearchInput ? "379px" : "76px"}>
        {showSearchInput && (
          <>
            <IconSvg onClick={clearText} icon="x" width="16px" />
            <input placeholder={placeholder} value={search} onChange={_onChange} />
          </>
        )}
        <SearchIcon onClick={onClickSearch} icon="search2" width="16px" />
      </Container>
    </>
  );
};

const Container = styled.div`
  border: 1px solid;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  width: ${({ width }) => width && width};
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  display: flex;
  border: 1px solid #81c394;
  border-radius: 8px;
  height: 44px;
  align-items: center;
  cursor: pointer;
  padding: 0 16px;

  input {
    border: none;
    width: 100%;
    outline: none;
    padding-left: 8px;
    font-family: "Proxima Nova";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: 1px solid ${({ theme }) => theme.colors.secondary500};

    &::placeholder{
     color: rgba(129, 131, 153, 1);
     font-weight: 400;
     }
  }
`;

const SearchIcon = styled(IconSvg)`
  margin: auto;
`;


SearchInput.defaultProps = {
  onSearchChange: () => {},
  placeholder: "Search",
};
export default SearchInput;
