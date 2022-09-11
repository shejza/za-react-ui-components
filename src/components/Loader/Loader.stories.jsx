
import React from "react";
import Loader from "./Loader";

export default {
  title: "Loader",
  component: Loader
};

const Template = args => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  $size: "16px"
};
