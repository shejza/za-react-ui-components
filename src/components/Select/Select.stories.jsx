import React from "react";
import Box from "../Box/Box";
import Select from "./Select";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    autocomplete: {
      control: "boolean",
    },
    showImage: {
      control: "boolean",
    },
  },
};

const Template = (props) => (
  <Box>
    <Select {...props} />
  </Box>
);

export const Default = Template.bind({});

const onChange = (opt) => alert(`The selected option was: ${opt.name}`);

const options = [
  {
    slug: null,
    logo_url: "https://images.unsplash.com/photo-1569613562636-7492d9f77aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0cmF3YmVycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    name: "Strawberry",
    id: 2,
    subheadline: "",
  },
  {
    slug: null,
    logo_url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Banana",
    id: 1,
    subheadline: "",
  },
  {
    slug: null,
    logo_url: "https://images.unsplash.com/photo-1604256913753-eef2d1d8ca21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    name: "Mango",
    id: 3,
    subheadline: "",
  },
  {
    slug: null,
    logo_url:
      "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    name: "Apple",
    id: 4,
    subheadline: "",
  },
  {
    slug: "orange",
    logo_url: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    name: "Orange",
    id: 11,
    subheadline: "",
  },
  {
    slug: "grape",
    logo_url: null,
    name: "Grape",
    id: 12,
    subheadline: "test",
  },
];

Default.args = {
  autocomplete: true,
  showImage: false,
  options,
  label: "name",
  valueKey: "id",
  image: "logo_url",
  placeholder: "Select",
  onChange,
};
