import React from "react";

import IconSvg, { availableIcons } from "./IconSvg";
import Box from "../Box/Box";

const keys = Object.keys(availableIcons);

export default {
  title: "Example/IconSvg",
  component: IconSvg,
  argTypes: {
    icon: {
      options: keys,
      control: { type: "select" },
    },
  },
};

const Template = (args) => <IconSvg {...args} />;

export const Example = Template.bind({});

Example.args = {
  icon: "AiTwotoneWarning",
  color: "black",
  width: "24px",
};

export const All = (args) => (
  <Box flex maxWidth="700px" wrap>
    {keys.map((key) => (
      <Box spacing="p-4">
        <p>{key}</p>
        <IconSvg {...args} key={key} icon={key} />
      </Box>
    ))}
  </Box>
);

All.args = {
  color: "black",
  width: "24px",
};
