import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    hideBorder: {
      control: "boolean",
    },
    hideIcon: {
      control: "boolean",
    }
  }
};

const Template = ({content, ...args}) => (
  <Accordion {...args}>
    {content}
  </Accordion>
);

export const Default = Template.bind({});

Default.args = {
  title: "Accordion 1",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  };

export const Example1 = Template.bind({});

Example1.args = {
  title: "Example one",
  hideBorder: false,
  hideIcon: false,
};
