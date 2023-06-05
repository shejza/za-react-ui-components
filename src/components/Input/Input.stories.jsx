import React from "react";
import Input from "./Input";
import { iconNames } from "../Icon/Icon";
import {  mapToText } from "../storyTools";
import Box from "../Box/Box";

const textProperties = ["value", "name", "label", "labelIcon", "validationText", "helperText"];

export default {
  title: "Input",
  component: Input,
  argTypes: {
    bgColor: { control: "color" },
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
    alwaysShowValidation: { control: "boolean" },
    ...mapToText(textProperties),
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const ListAllInputs = (args) => {
  return (
    <Box flex direction="column" gap="16px">
      <Input {...args} />
      <Input {...args} value="John Doe|" />
      <Input {...args} value="John Doe|" validationText="This is an error message" alwaysShowValidation={true} />
      <Input {...args} value="John Doe|" disabled />
    </Box>
  );
};

ListAllInputs.args = {};
