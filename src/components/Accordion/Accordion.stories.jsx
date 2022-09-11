import React from "react";
import Accordion from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    hideLine: {
      control: "boolean",
    },
    hideIcon: {
      control: "boolean",
    }
  }
};

const Template = (args) => (
  <Accordion {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
  </Accordion>
);

export const Default = Template.bind({});

Default.args = {
  title: "CLOSE CHALLENGES",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

export const Example1 = Template.bind({});

Example1.args = {
  title: "Example one",
  hideLine: false,
  hideIcon: false,
};
