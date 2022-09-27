import React from "react";
import { mapToText } from "../storyTools";
import Box, { TYPE_CONFIG } from "./Box";

const textProperties = [
  "bgColor",
  "borderRadius",
  "color",
  "gridColumn",
  "shrink",
]

export default {
  title: "Box",
  component: Box,
  argTypes: {
    alignItems: {
      options: ["normal", "stretch", "center" , "start" , "end" , "flex-start" , "flex-end" , "baseline", "first baseline", "last baseline", "safe center", "unsafe center", "inherit", "initial", "revert", "unset", ],
      control: { type: "select" },
    },
    ...mapToText(textProperties),
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "select" },
    },
    disablePointerEvents: {
      control: "boolean"
    },
    grow: {
      control: {type: "number"}
    },
    justifyContent: {
      options: ["center", "start", "end", "flex-start", "flex-end", "left", "right", "normal", "space-between", "space-around", "space-evenly", "stretch"],
      control: { type: "select" },
    },
    relative: {
      control: "boolean"
    },
    flex: {
      control: "boolean"
    },
    textAlign: {
      options: ["start", "end", "left", "right", "center", "justify", "justify-all", "match-parent"],
      control: { type: "select" },
    },
	hide: {
		control: "boolean"
	}
  },
};

const Template = ({content, ...args}) => <Box {...args}>{content}</Box>;

export const Default = Template.bind({});


Default.args = {
  title: "Example one",
  content: "this is a box"
};
