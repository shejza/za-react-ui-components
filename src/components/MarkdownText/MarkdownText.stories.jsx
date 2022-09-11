
import React from "react";
import MarkdownText from "./MarkdownText";

export default {
  title: "MarkdownText",
  component: MarkdownText,

};

const Template = ({text, ...args}) => <MarkdownText {...args}>{text}</MarkdownText>;

export const Default = Template.bind({});

Default.args = {
  text: "[This is a link to google](www.google.com)",
};
