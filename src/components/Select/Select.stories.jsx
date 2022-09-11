import React from "react";
import Select from "./index";

export default {
  title: "Select",
  component: Select,
};

const options = ["option 1", "option 2", "option 3"];
const categories = [
  {
    "value": 1,
    "label": "Agriculture"
  },
  {
    "value": 2,
    "label": "Construction"
  },
  {
    "value": 3,
    "label": "Consulting"
  },
  {
    "value": 4,
    "label": "Creative arts"
  },
  {
    "value": 5,
    "label": "Education"
  },
  {
    "value": 6,
    "label": "Energy"
  },
  {
    "value": 7,
    "label": "Entertainment"
  },
  {
    "value": 8,
    "label": "Entrepreneurship"
  },
  {
    "value": 9,
    "label": "Events"
  },
  {
    "value": 10,
    "label": "Fashion"
  },
  {
    "value": 11,
    "label": "Finance"
  },
  {
    "value": 12,
    "label": "Food"
  },
  {
    "value": 13,
    "label": "Government"
  },
  {
    "value": 14,
    "label": "Hospitality"
  },
  {
    "value": 15,
    "label": "Insurance"
  },
  {
    "value": 16,
    "label": "Law"
  },
  {
    "value": 17,
    "label": "Manufacturing"
  },
  {
    "value": 18,
    "label": "Marketing"
  },
  {
    "value": 19,
    "label": "Media"
  },
  {
    "value": 20,
    "label": "Medical"
  },
  {
    "value": 21,
    "label": "Mining"
  },
  {
    "value": 22,
    "label": "Public services"
  },
  {
    "value": 23,
    "label": "Real estate"
  },
  {
    "value": 24,
    "label": "Retail"
  },
  {
    "value": 25,
    "label": "Science"
  },
  {
    "value": 26,
    "label": "Security"
  },
  {
    "value": 27,
    "label": "Social impact"
  },
  {
    "value": 28,
    "label": "Socializing"
  },
  {
    "value": 29,
    "label": "Technology"
  },
  {
    "value": 30,
    "label": "Telecommunications"
  },
  {
    "value": 31,
    "label": "Transportation"
  },
  {
    "value": 32,
    "label": "Travel"
  }
];

const onChange = (selected) => {
  alert(JSON.stringify(selected));
};
const optionElements = options.map((value) => (
  <option key={value}>{value}</option>
));

const Template = (args) => <Select {...args}>{optionElements} </Select>;

export const Default = Template.bind({});

Default.args = {
  spacing: "p-2",
  title: "this is a title",
  placeholder: "Select a category",
  options: categories,
  onChange,
  searchable: ["Select a category", "No matching membership types"]
};

export const Example1 = Template.bind({});

Example1.args = {
  title: "Select Multiple",
  isMultiple: true,
  spacing: "p-2",
  options: categories,
  defaultValue: [categories[0]],
  onChange,
  width: "488px",
  placeholder: "Select a category",
  searchable: ["Select a category", "No matching membership types"]
};
