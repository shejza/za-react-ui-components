import React from "react";
import Button from "./Button";
import { iconNames } from "../Icon/Icon";
import { mapToBoolean, mapToText } from "../storyTools";

const textProperties = ["bgColor", "color", "borderRadius", "borderColor", "maxWidth", "heightSize"];
const booleanProperties = [
  "regular",
  "semiBold",
  "bold",
  "extraBold",
  "loading",
  "disabled",
  "widthFull",
  "disablePointerEvents",
];

export default {
  title: "Button",
  component: Button,
  argTypes: {
    alignItems: {
      options: ["baseline", "center", "flex-start", "flex-end", "stretch", "initial", "inherit"],
      control: { type: "select" },
    },
    alignSelf: {
      options: ["auto", "baseline", "center", "flex-start", "flex-end", "stretch", "initial", "inherit"],
      control: { type: "select" },
    },
    animation: {
      control: { type: "text" },
    },
    backdropFilter: {
      control: { type: "text" },
    },
    background: {
      control: { type: "text" },
    },
    bgColor: {
      control: { type: "text" },
    },
    leftIcon: {
      options: iconNames,
      control: { type: "select" },
    },
    rightIcon: {
      options: iconNames,
      control: { type: "select" },
    },
    ...mapToText(textProperties),
    ...mapToBoolean(booleanProperties),
  },
};

const Template = (args) => <Button {...args}>CREATE GROUP LISTING</Button>;

export const Default = Template.bind({});

const onClick = () => alert("you have clicked this button");

Default.args = {
  title: "Default",
  leftIcon: "FaBeer",
  borderRadius: "8px",
  onClick,
};
