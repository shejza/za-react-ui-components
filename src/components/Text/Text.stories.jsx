import React from "react";
import Text from "./Text";
import { mapToBoolean, mapToText } from "../storyTools";

const textProperties = ["size", "value", "color", "lineHeight"];
const booleanProperties = ["regular", "semiBold", "bold", "extraBold"];

export default {
  title: "Text",
  component: Text,
  argTypes: {
    ...mapToText(textProperties),
    ...mapToBoolean(booleanProperties),
  },
};

const Template = ({ value, ...args }) => <Text {...args}>{value}</Text>;

export const Default = Template.bind({});

Default.args = {
  value: "Here is some text to play around with",
};
