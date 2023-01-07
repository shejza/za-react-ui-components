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
const onClick = (event)=> window.alert(`you clicked: ${event.target.innerText}`);

const Template = ({ ...args }) => (
  <div>
      <Menu {...args}>
      <ul>
          <li  onClick={onClick}>Facebook</li>
          <li  onClick={onClick}>Twitter</li>
          <li  onClick={onClick}>Linkedin</li>
        </ul>
      </Menu>
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
