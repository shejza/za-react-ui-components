import React from "react";
import { mapToText } from "../storyTools";
import ListingConditionsCompact from "./ListingConditionsCompact";

const textProperties = [
  "icon",
  "condition",
  "conditionDescription",
  "link",
  "iconWidth",
];

export default {
  title: "ListingConditionsCompact",
  component: ListingConditionsCompact,
  argTypes: {
    ...mapToText(textProperties),
    isDesktop: {
      control: "boolean",
    },
  },
  
};

const Template = (args) => (
  <div>
    <ListingConditionsCompact {...args} />
  </div>
);

export const Default = Template.bind();

Default.args = {
  conditions: {
    discord_server: "[ThriveCoin](https://app.thrivecoin.com)",
    role: "Admin",
    verification_speed: "within 1 hour",
  },
  description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
};
