import React from "react";
import Box from "../Box/Box";
import NotificationManager from "./NotificationManager";
import sparklesImg from "../assets/sparkles-notification.svg";

export default {
  title: "NotificationManager",
  component: NotificationManager,
};

const Template = (args) => (
  <Box flex justifyContent="flex-end" spacing="pr-8">
    <NotificationManager {...args} sparklesImg={sparklesImg} />
  </Box>
);

const notifications = [
  {
    id: 1,
    config: { type: "reward_received", reward_amount: 10 },
    text: "this is content for notification 1, this is a really long one in order to ilustrate what a long message would look like inside the notification component",
    time: "1 week ago",
    icon: "trophy-star",
    title: "custom title 1",
    seen: true
  },
  {
    id: 2,
    config: { type: "reward_received", reward_amount: 40 },
    text: "this render prop is content for notification 2",
    time: "1 year ago",
    icon: "codesandbox",
    title: "Contribution rewarded!"
  },
  {
    id: 3,
    config: { type: "reward_received", reward_amount: 90 },
    text: "render prop 3 here",
    time: "2 minutes ago",
    icon: "trophy-icon",
    title: "Contribution rewarded here too!"
  },
  {
    id: 4,
    config: { type: "reward_received", reward_amount: 90 },
    text: "render prop 3 here",
    time: "2 minutes ago",
    icon: "alert-circle",
    iconColor: "red",
    title: "Contribution rewarded here too!"
  },
  {
    id: 5,
    config: { type: "reward_received", reward_amount: 90 },
    text: "render prop 3 here",
    time: "2 minutes ago",
    icon: "alert-circle",
    iconWidth: "16px",
    iconColor: "blue",
    title: "Contribution rewarded here too!"
  },
];

const dismiss = (event) => {
  event.preventDefault();
  alert(`dismiss fired for: ${event.currentTarget.dataset.id}`);
};

const onClick = (event) => {
  event.preventDefault();
  alert(`on Click fired for: ${event.currentTarget.dataset.id}`);
};

export const Default = Template.bind({});

Default.args = {
  notifications,
  dismiss,
  onClick,
};


export const NoNotificationsExample  = Template.bind({});
