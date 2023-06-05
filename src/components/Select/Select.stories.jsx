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
    logo_url: "https://www.thrivecoin.com/static/media/leaf.af014cbc7c7bd39cd19ff294b6a5fe9d.svg",
    name: "Thrive Design Team",
    id: 2,
    subheadline: "",
  },
  {
    slug: null,
    logo_url: "https://ih1.redbubble.net/image.3404643209.1273/st,small,507x507-pad,600x600,f8f8f8.u1.jpg",
    name: "vigan's island",
    id: 1,
    subheadline: "",
  },
  {
    slug: null,
    logo_url: "https://i.ytimg.com/vi/DqnMOGoz-Zg/sddefault.jpg",
    name: "Robert's new group",
    id: 3,
    subheadline: "",
  },
  {
    slug: null,
    logo_url:
      "https://st2.depositphotos.com/1266988/8286/v/450/depositphotos_82867686-stock-illustration-dollar-coin-logo-icon.jpg",
    name: "The Dragon friends",
    id: 4,
    subheadline: "",
  },
  {
    slug: "uniswap",
    logo_url: "https://mirror-media.imgix.net/publication-images/szawxl3gg_-4VS1L2ibyq.png?h=500&w=500",
    name: "Uniswap",
    id: 11,
    subheadline: "Swap, earn, and build on the leading decentralized crypto trading protocol.",
  },
  {
    slug: "olympus-dao",
    logo_url: null,
    name: "Olympus DAO",
    id: 12,
    subheadline: "The Future Decentralized Reserve Currency",
  },
  {
    slug: "ens",
    logo_url: null,
    name: "ENS",
    id: 14,
    subheadline: "Decentralised naming for wallets, websites, \u0026 more.",
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
