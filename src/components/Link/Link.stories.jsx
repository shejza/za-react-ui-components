
import React from "react";
import Link from "./Link";

export default {
  title: "Link",
  component: Link
};

const Template = args => <Link {...args} />;

export const Default = Template.bind({});

Default.args = { };

export const Example1 = Template.bind({});

Example1.args= {
  title: "Example one"
};

