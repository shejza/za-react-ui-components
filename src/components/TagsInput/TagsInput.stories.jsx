import React from "react";
import TagsInput from "./TagsInput";

export default {
  title: "TagsInput",
  component: TagsInput,
};

const Template = (args) => <TagsInput {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const Example1 = Template.bind({});

const suggestions = [
  { label: "Gleamink", value: "xGleamink"},
  { label: "Lunchpod", value: "xLunchpod"},
  { label: "Gluid", value: "xGluid"},
  { label: "Plasmosis", value: "xPlasmosis"},
  { label: "Furnitech", value: "xFurnitech"},
  { label: "Isosphere", value: "xIsosphere"},
  { label: "Uneeq", value: "xUneeq"},
  { label: "Exospace", value: "xExospace"},
  { label: "Silodyne", value: "xSilodyne"},
  { label: "Homelux", value: "xHomelux"},
  { label: "Prowaste", value: "xProwaste"},
  { label: "Dadabase", value: "xDadabase"},
  { label: "Daycore", value: "xDaycore"},
  { label: "Acumentor", value: "xAcumentor"},
  { label: "Shopabout", value: "xShopabout"},
  { label: "Zanymax", value: "xZanymax"},
  { label: "Jasper", value: "xJasper"},
  { label: "Keengen", value: "xKeengen"},
  { label: "Zilch", value: "xZilch"},
  { label: "Centuria", value: "xCenturia"},
];

Example1.args = {
  title: "With Auto Complete",
  suggestions
};


export const Example2 = Template.bind({});

Example2.args = {
  title: "When loading",
  loading: true
};
