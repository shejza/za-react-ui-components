import React, { useState } from "react";
import MultiSelect from "./MultiSelect";

export default {
  title: "MultiSelect",
  component: MultiSelect,
};

const ICONS = [];

const categories = (source, property = "icon") => [
  {
    value: 1,
    label: "Item",
    [property]: source[0],
  },
  {
    value: 2,
    label: "Item 2",
    [property]: source[1],
  },
  {
    value: 3,
    label: "Item 3",
    [property]: source[2],
  },
  {
    value: 4,
    label: "Item 4",
    [property]: source[3],
  },
  {
    value: 5,
    label: "Item 5",
  },
  {
    value: 6,
    label: "Item 6",
  },
  {
    value: 7,
    label: "Item 7",
  },
];

const Template = (args) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const onItemClick = (option) => {
    if (selectedOptions.find((i) => i.value === option.value)) {
      const _selectedOptions = selectedOptions.filter((selectedOption) => selectedOption.value !== option.value);
      setSelectedOptions(_selectedOptions);
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  return (
    <MultiSelect
      selectedOptions={selectedOptions}
      setSelectedOptions={setSelectedOptions}
      onItemClick={onItemClick}
      {...args}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "All",
  options: categories(ICONS),
  disabled: false,
  keepOpen: false,
  maxHeight: 168,
};

