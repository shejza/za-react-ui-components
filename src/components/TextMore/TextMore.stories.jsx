import React from "react";
import TextMore from "./TextMore";

export default {
  title: "TextMore",
  component: TextMore,
  argTypes: {
    description: {
      control: { type: "text" },
    },
	maxWidth: {
		control: { type: "text" },
	}
  },
};

const Template = ({ ...args }) => (
  <div>
   <TextMore {...args}>	</TextMore>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  description:
    " A community passionate about supporting the needs would this my organization. Not retired, were some more text here Not retired, were some more text here Not retired, were some more text here Not retired, were some more text here",
	maxWidth: "490px"
};
