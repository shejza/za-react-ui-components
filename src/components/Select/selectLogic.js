import { useMemo, useState, useRef, useEffect } from "react";

const INITIAL_STATE = {
  isListOpen: false,
  selectedItem: null,
  keyword: "",
};

const SelectLogic = ({ options: _options, title: _title, select, ...props }) => {
  const searchField = useRef();
  const [state, setState] = useState({
    INITIAL_STATE,
    options: _options,
    title: _title,
  });

  const { isListOpen } = state;

  const close = useMemo(() => {
    setState({ isListOpen: false, ...state });
  }, []);

  const clearSelection = () => {
    const { name, title, onChange } = props;

    setState({ selectedItem: null, title, ...state });
    onChange(null, name);
  };

  const selectSingleItem = (item) => {
    const { options } = props;

    const selectedItem = options.find((i) => i.value === item.value);
    selectItem(selectedItem);
  };

  const selectItem = (item) => {
    const { label, value } = item;
    const { options, selectedItem } = state;
    const { name, onChange } = props;

    let foundItem;

    if (!label) {
      foundItem = options.find((i) => i.value === item.value);
    }

    setState({
      ...state,
      title: label || foundItem.label,
      isListOpen: false,
      selectedItem: item,
    });
    selectedItem?.value !== value && onChange(item, name);
  };

  const toggleList = () => {
    setState((prevState) => ({
      ...prevState,
      isListOpen: !prevState.isListOpen,
      keyword: "",
    }));
  };

  const filterList = (e) => {
    setState({
      ...state,
      keyword: e.target.value.toLowerCase(),
    });
  };

  useEffect(() => {
    if (select) {
      selectSingleItem(select);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (isListOpen) {
        searchField.current?.focus();

        window.addEventListener("click", close);
      } else {
        window.removeEventListener("click", close);
      }
    }, 0);

    return () => window.removeEventListener("click", close);
  }, [state.isListOpen]);

  return {
    selectItem,
    toggleList,
    filterList,
    searchField,
    ...state,
  };
};


export default SelectLogic;
