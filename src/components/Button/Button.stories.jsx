import React, { useState } from "react";
import Button, { TYPE_CONFIG } from "./Button";
import { iconNames } from "../IconSvg/IconSvg";
import { colors } from "../../constants";
import { fontFamily } from "./../../constants";
import { mapToBoolean, mapToText } from "../storyTools";
import { FONT_CONFIG } from "../../utils/typography";

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
    size: {
      options: ["md", "lg"],
      control: { type: "select" },
    },
    kind: {
      options: TYPE_CONFIG,
      control: { type: "select" },
    },
    leftIcon: {
      options: iconNames,
      control: { type: "select" },
    },
    rightIcon: {
      options: iconNames,
      control: { type: "select" },
    },
    variant: {
      options: Object.keys(colors),
      control: { type: "select" },
    },
    fontFamily: {
      options: Object.keys(fontFamily),
      control: { type: "select" },
    },
    typography: {
      options: Object.keys(FONT_CONFIG),
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
  title: "Example one",
  leftIcon: "plus-circle",
  bold: false,
  semiBold: false,
  borderRadius: "8px",
  onClick,
};

export const Example1 = Template.bind({});

Example1.args = {
  leftIcon: "plus-circle",
  rightIcon: "plus-circle",
};

export const Example2 = (args) => {
  const [loading, setLoading] = useState(false);
  const toggle = () => {
    setLoading(!loading);
  };

  return (
    <Button loading={loading} onClick={toggle} {...args}>
      Click here to toggle loading.
    </Button>
  );
};

Example2.args = {
  title: "loading button",
};
