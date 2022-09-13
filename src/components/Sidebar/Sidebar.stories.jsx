
import React from "react";
import Sidebar from "./Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar
};

const Tab1 = ()=> "tab number 1";
const Tab2 = ({ propsData = "tab number 2" })=> propsData;
const Tab3 = ()=> "tab number 3";


const Template = args => <Sidebar {...args} />;

export const Default = Template.bind({});

Default.args = {
  tabProps: {
    propsData: "this came from props",
  },
  headers: ["Tab 1", "Tab 2", "Tab 3"],
  tabClasses: [Tab1, Tab2, Tab3],
  selectedIndex: 0,
};

export const Example1 = Template.bind({});

Example1.args= {
  ...Default.args,
  title: "Example one"
};
