
import React from "react";
import ProgressBar from "./ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar
};

const Template = args => <ProgressBar {...args} />;

export const Default = Template.bind({});

Default.args = { };

export const Example1 = Template.bind({});

Example1.args= {
  title: "Example one"
};

