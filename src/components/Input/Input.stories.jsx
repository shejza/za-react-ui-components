import React from "react";
import Input from "./Input";
import { iconNames } from "../IconSvg/IconSvg";
import { mapToText } from "../storyTools";

const textProperties = ["value", "name", "label", "labelIcon", "validationText", "helperText"];

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    disabled: { control: "boolean" },

    invalid: { control: "boolean" },
    valid: { control: "boolean" },
    spacing: {
      options: ["m-0", "m-1", "m-2", "p-0", "p-1", "p-2"],
      control: { type: "select" },
    },
    icon: {
      options: iconNames,
      control: { type: "select" },
    },
    underline: { control: "boolean" },
    ...mapToText(textProperties),
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
