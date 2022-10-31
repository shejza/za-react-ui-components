
import React from "react";
import Highlighter from "./Highlighter";

export default {
  title: "Highlighter",
  component: Highlighter,

};

const Template = ({text, ...args}) => <Highlighter {...args}>{text}</Highlighter>;

export const Default = Template.bind({});

Default.args = {
  text: `
  \`\`\`js
  import React from "react";
  function () {}
  \`\`\`
  `,
};
