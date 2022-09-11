module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName}
};

const Template = args => <${componentName} {...args} />;

export const Default = Template.bind({});

Default.args = { };

export const Example1 = Template.bind({});

Example1.args= {
  title: 'Example one'
}

`,
  extension: `.stories.jsx`
});
