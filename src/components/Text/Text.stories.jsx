import React from "react";
import Text from "./Text";
import { fontSizes } from "../../constants";
import { fontFamily } from "../../constants";
import { mapToBoolean, mapToText } from "../storyTools";
import { FONT_CONFIG } from "../../utils/typography";

const textProperties = ["size", "value", "color", "lineHeight"];
const booleanProperties = ["regular", "semiBold", "bold", "extraBold"];

export default {
  title: "Text",
  component: Text,
  argTypes: {
    typography: {
      options: Object.keys(FONT_CONFIG),
      control: { type: "select" },
    },
    type: {
      options: Object.keys(fontSizes),
      control: { type: "select" },
    },
    ...mapToText(textProperties),
    ...mapToBoolean(booleanProperties),
    fontFamily: {
      options: Object.keys(fontFamily),
      control: { type: "select" },
    },
    fontWeight: {
      control: "text"
    }
  },
};

const Template = ({ value, ...args }) => <Text {...args}>{value}</Text>;

export const Default = Template.bind({});

Default.args = {
  value: "Here is some text to play around with",
  spacing: "ml-2+2",
};
