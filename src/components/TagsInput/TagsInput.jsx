import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const TRIGGER_KEYS = ["Enter", ",", " "];

const TagsInput = ({
  onChange,
  placeholder,
  validationFN,
  tags: originalTags,
  strict,
  suggestions,
  onSearchChange,
  noSplit,
  loading
}) => {
  const [tags, setTags] = useState(originalTags);
  const [keyval, setKeyVal] = useState([]);
  const [search, setSearch] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const doubleTracking = !!onSearchChange;
  const _placeholder = tags.length > 0 ? "" : placeholder;

  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((_, i) => i !== index));
    if (doubleTracking) {
      setKeyVal((prevState) => prevState.filter((_, i) => i !== index));
    }
  };

  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = search.trim();

    if (TRIGGER_KEYS.includes(key) && trimmedInput.length) {
      e.preventDefault();
      addTag(trimmedInput);
    }

    if (key === "Backspace" && !trimmedInput && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setSearch(poppedTag);
    }

    setIsKeyReleased(false);
  };

  const addTag = (value, keyval) => {
    let newTags = (noSplit ? [value] : value.split(" ")).filter((tag) => !tags.includes(tag));

    if (strict) {
      newTags = newTags.filter((tag) =>
        suggestions.find((suggestion) => suggestion.label.toLowerCase() === tag.toLowerCase())
      );
    }

    if (newTags.length === 0) {
      return;
    }

    if (doubleTracking) {
      setKeyVal((prevState) => [...prevState, keyval]);
    }

    setTags((prevState) => [...prevState, ...newTags]);
    setSearch("");
  };

  const onKeyUp = () => {
    setIsKeyReleased(true);
  };

  const selectSuggestion = (event) => {
    const { label, value } = event.target.dataset;
    addTag(label, { label, value });
  };

  const _onChange = (event) => {
    setSearch(event.currentTarget.value);
    onSearchChange(event.currentTarget.value);
  };

  let filteredSuggestions = suggestions
    .filter((suggestion) => suggestion.label.toLowerCase().indexOf(search.toLowerCase()) > -1)
    .filter((suggestion) => !tags.find((tag) => tag.toLowerCase() === suggestion.label.toLowerCase()));

  useEffect(() => onChange && onChange(tags, keyval), [tags]);

  return (
    <Container>
      {tags.map((tag, index) => (
        <ValidationDiv key={tag} valid={validationFN(tag)} className="tag">
          {tag}
          <button onClick={() => deleteTag(index)}>X</button>
        </ValidationDiv>
      ))}
      <input
        noBorder
        placeholder={_placeholder}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        value={search}
        onChange={_onChange}
      />
      {<AutocompletePanel suggestions={filteredSuggestions} onClick={selectSuggestion} loading={loading} />}
    </Container>
  );
};

const AutocompletePanel = ({ suggestions, onClick, loading, }) => {
  if (loading) {
    return (
      <SuggestionsContainer>
        <Loader $center $size="40px" />
      </SuggestionsContainer>
    );
  }

  if (!suggestions.length) {
    return null;
  }

  return (
    <SuggestionsContainer>
      <ul onClick={onClick}>
        {suggestions.map(({ label, value }) => (
          <li key={label} data-value={value} data-label={label}>
            {label}
          </li>
        ))}
      </ul>
    </SuggestionsContainer>
  );
};

const SuggestionsContainer = styled.div`
  background: white;
  position: absolute;
  z-index: 10;
  top: 115%;
  border: 1px solid #e4e4ed;
  box-shadow: 0px 3px 8px rgba(31, 32, 41, 0.08);
  width: 97%;
  min-width 171px;
  overflow: scroll;
  max-height: 279px;
  overflow-x: hidden;

  ul {
    margin: 0;
    padding: 5px;
    list-style: none;
  }

  ul li {
    padding: 1em;
  }

  ul li:hover {
    cursor: pointer;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.primary50};
    border-radius: 4px;
  }
`;

const Container = styled.div`
  min-height: 56px;
  height: auto;
  width: 100%;
  position: relative;

  padding-left: 1em;
  background: #fafafd;
  border: 1px solid #bfbfcc;
  box-sizing: border-box;
  border-radius: 12px;

  display: flex;
  flex-wrap: wrap;

  ${SuggestionsContainer} {
    display: none;
  }

  &:focus-within,
  &:hover {
    ${SuggestionsContainer} {
      display: block;
    }
  }

  input {
    width: 100%;
    background: #fafafd;
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

  .tag {
    font-weight: bold;
    display: flex;
    align-items: center;
    margin: 7px 0;
    margin-right: 10px;
    border: 1px solid #ffffff;
    border-radius: 5px;

    padding: 4px 4px 4px 8px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 8px;

    white-space: nowrap;
  }

  .tag button {
    display: flex;
    padding: 6px;
    border: none;
    background-color: unset;
    cursor: pointer;
  }
`;

const ValidationDiv = styled.div`
  && {
    ${({ valid }) =>
      !valid &&
      `
      background: #FAE6E6;
      border: 1px solid #C52D2D;
    `}
  }
`;

TagsInput.defaultProps = {
  validationFN: () => true,
  onSearchChange: () => {},
  tags: [],
  placeholder: "Enter a tag",
  suggestions: [],
  strict: false,
  noSplit: false,
  loading: false,
};

TagsInput.propTypes = {
  placeholder: propTypes.string,
  tags: propTypes.arrayOf(propTypes.string),
};

export default TagsInput;
