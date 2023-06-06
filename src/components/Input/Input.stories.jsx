import React from "react";
import Input from "./Input";
import { iconNames } from "../Icon/Icon";
import {  mapToText } from "../storyTools";
import Box from "../Box/Box";
import Text from "../Text/Text";

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
    <Box display="flex" flexDirection="column" gap="16px">
      <Text>Normal Input</Text>
      <Input {...args} />

      <Text>Filled Input</Text>
      <Input {...args} value="John Doe|" />

      <Text>Input with Error state</Text>
      <Input {...args} value="John Doe|" validationText="This is an error message" alwaysShowValidation={true} />

      <Text>Disabled Input</Text>
      <Input {...args} value="John Doe|" disabled />
    </Box>
  );
};

ListAllInputs.args = {};
