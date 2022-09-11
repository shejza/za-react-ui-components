import React from "react";

import GroupCard from "./GroupCard";

export default {
  title: "Example/GroupCard",
  component: GroupCard,
};

const Template = (args) => <GroupCard {...args} />;

export const All = Template.bind({});
All.args = {
  user: {},
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
