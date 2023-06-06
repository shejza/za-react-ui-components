import React from "react";

import { allAvailableIcons } from "./allAvailableIcons";
import Icon from "./Icon";
import Box from "../Box/Box";

const keys = Object.keys(allAvailableIcons);

export default {
  title: "Example/Icon",
  component: Icon,
  argTypes: {
    icon: {
      options: keys,
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Example = Template.bind({});

Example.args = {
  icon: "BsFillAlarmFill",
  color: "black",
  width: "24px",
};

export const All = (args) => (
  <Box display="flex" maxWidth="700px" wrap>
    {keys.map((key) => (
      <Box spacing="p-4">
        <p>{key}</p>
        <Icon {...args} key={key} icon={key} />
      </Box>
    ))}
  </Box>
);

All.args = {
  color: "black",
  width: "24px",
};
