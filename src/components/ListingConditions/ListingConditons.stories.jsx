import React from "react";
import { mapToText } from "../storyTools";
import ListingConditions from "./ListingConditions";

const textProperties = [
  "icon",
  "condition",
  "conditionDescription",
  "link",
  "iconWidth",
];

export default {
  title: "ListingConditions",
  component: ListingConditions,
  argTypes: {
    ...mapToText(textProperties),
    isDesktop: {
      control: "boolean",
    },
  },
};

const Template = (args) => (
  <div>
    <ListingConditions {...args} />
  </div>
);

export const Default = Template.bind();

Default.args = {
  conditions: {
    discord_server: "[ThriveCoin](https://app.thrivecoin.com)",
    role: "Admin",
    verification_speed: "within 1 hour"
  },
};
