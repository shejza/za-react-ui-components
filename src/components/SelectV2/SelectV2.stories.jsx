
import React from "react";
import SelectV2 from "./SelectV2";

export default {
  title: "SelectV2",
  component: SelectV2
};

const options = [
  {
    label: "option 1", value: 1,
  },
  {
    label: "option 2", value: "value2",
  },
  {
    label: "option 3", value: "3",
  }
];

const Template = args => <SelectV2 {...args} />;

export const Default = Template.bind({});

Default.args = { options, placeholder: "select one of the options" };

export const Example1 = Template.bind({});

Example1.args= {
  title: 'Example one'
};

