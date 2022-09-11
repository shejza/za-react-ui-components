import React from "react";
import Tooltip, { DIRECTIONS } from "./Tooltip";
import Box from "../Box/Box";
import { mapToText } from "../storyTools";

const properties = [
  "bgColor",
  "message",
  "top",
  "right",
  "bottom",
  "left",
  "borderWidth",
  "wrapperTop",
  "wrapperRight",
  "wrapperBottom",
  "wrapperLeft",
  "$minWidth",
  "$textAlign",
  "transform",
  "arrowPosition",
  "text",
  "href",
];

export default {
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    direction: {
      options: Object.keys(DIRECTIONS),
      control: { type: "select" },
    },
    ...mapToText(properties)
  },
};

const Template = (args) => (
  <Box flex justifyContent="center" spacing="p-8">
    <Tooltip {...args}>
      <button>Wanna see a tooltip?</button>
    </Tooltip>
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  message: "this is an example tooltip message. ",
};
