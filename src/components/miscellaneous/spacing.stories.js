import React from "react";
import { StyledBox } from "./miscellaneous.stories";

const Template = ({ ...args }) => <StyledBox {...args}></StyledBox>;

export default {
  title: "Responsive / Spacing",
  component: Template,
  args: {
    spacing: "p-4",
    "lg-spacing": "p-5",
    "md-spacing": "p-5",
    "sm-spacing": "py-4",
  },
};

export const Default = Template.bind({});
