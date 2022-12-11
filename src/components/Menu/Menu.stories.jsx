import React from "react";
import Menu from "./Menu";

export default {
  title: "Menu",
  component: Menu,
  argTypes: {
    hideAccordion: {
      control: "boolean",
    },
  },
};



const Template = ({ ...args }) => (
  <div>
      <Menu {...args}/>
  </div>
);

export const Default = Template.bind({});


Default.parameters = {
};

Default.args = {
  active: false,
  title: "Text",
  icon: "MdMoreVert"

}
