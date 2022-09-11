import { useMemo, useState, useRef, useEffect } from "react";

const INITIAL_STATE = {
  isListOpen: false,
  selectedItem: [],
  keyword: "",
};

const SelectLogic = ({ options, title: _title, defaultValue = [],...props }) => {
  const searchField = useRef();
  const [state, setState] = useState({
    ...INITIAL_STATE,
    title: _title,
  });

  const { isListOpen, selectedItem, keyword } = state;
  let filteredOptions = [...options];

  if (keyword.length) {
    const _keyword = keyword.toLowerCase();
    filteredOptions = filteredOptions.filter((item) =>
      item.label.toLowerCase().includes(_keyword)
    );
  }

  if (selectedItem.length) {
    filteredOptions = filteredOptions.filter(
      (item) => !selectedItem.includes(item)
    );
  }

  const close = useMemo(() => {
    setState({ isListOpen: false, ...state });
  }, []);

  const clearSelection = () => {
    const { name, title, onChange } = props;

    setState({ selectedItem: null, title, ...state });
    onChange(null, name);
  };

  const selectSingleItem = (item) => {

    const selectedItem = options.find((i) => i.value === item.value);
    selectItem(selectedItem);
  };

  const selectMultipleItems = (items) => {
    items.forEach((item) => {
      const selectedItem = options.find((i) => i.value === item.value);
      setTimeout(() => {
        selectItem(selectedItem, true);
      });
    });
  };

  const onItemClick = (item, e)=> {
    e.stopPropagation();
    selectItem(item);
  };

  const selectItem = (item) => {
    const { selectedItem } = state;
    const { name, onChange } = props;
    const index = selectedItem.indexOf(item);
    let newItems = [];

    if (index !== -1) {
      newItems = selectedItem.filter((_, xindex) => xindex !== index);
    } else {
      newItems = [...selectedItem, item];
    }
    const title = generateTitle(newItems);

    onChange(newItems, name);
    setState({ ...state, selectedItem: newItems, title });
  };

  const generateTitle = (selectedItem) => {
    const { titleSingular, titlePlural } = props;
    const { length } = selectedItem;
    let title = props.title;

    if (length === 1) {
      title = `${length} ${titleSingular}`;
    }
    if (length > 1) {
      title = `${length} ${titlePlural}`;
    }
    return title;
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
    if (defaultValue.length) {
      selectMultipleItems(defaultValue);
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
    ...state,
    onItemClick,
    toggleList,
    filterList,
    searchField,
    filteredOptions,
  };
};

export default SelectLogic;
