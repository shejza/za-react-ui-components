import React from "react";
import SearchInput from "./SearchInput";

export default {
  title: "SearchInput",
  component: SearchInput,
  argTypes: {
    placeholder: { control: "text" },
  }
}; 


const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});

Default.args = {};


