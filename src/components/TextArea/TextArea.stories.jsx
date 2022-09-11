import React from "react";
import { mapToText } from "../storyTools";
import TextArea from "./TextArea";

const textProperties = ["label", "marginBottom", "borderColor", "bgColor"];

export default {
  title: "TextArea",
  component: TextArea,
  invalid: false,
  showValidation: true,
  valid: false,
  argTypes: {
    ...mapToText(textProperties)
  },
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
