import React from "react";
import { mapToText } from "../storyTools";
import AdminCard from "./AdminCard";

const textProperties = [
  "bgColor",
  "dateOfInvite",
  "email",
  "username",
  "role",
  "userEmail"
];

export default {
  title: "AdminCard",
  component: AdminCard,
  argTypes: {
    ...mapToText(textProperties),
    isPending: {
      control: "boolean"
    },
    isAdmin: {
      control: "boolean"
    },
  },
};

const Template = (args) => (
  <div>
    <AdminCard {...args} />
  </div>
);

export const Default = Template.bind();

Default.args = {
  title: "Admin Card",
  bgColor: "#fff",
  dateOfInvite: "2 hours ago",
  email: "johndoe@thrivecoin.com",
  role: "Owner",
  username: "JohnDoe",
  userEmail: "johndoe@thrivecoin.com",
  isPending: false,
  isAdmin: false,
};
