import React from "react";
import { mapToText } from "../storyTools";
import Listing from "./Listing";
import { typeSocials } from "../../constants";

const textProperties = [
  "ImageURL",
  "title",
  "description",
  "type",
];

export default {
  title: "Listing",
  component: Listing,
  argTypes: {
    ...mapToText(textProperties),
    reward: {
      control: { type: "number" },
    },
    canCompleteMultipleTimes: {
      control: "boolean",
    },
    completedCount: {
      control: { type: "number" },
    },
    isAuthenticated: {
      control: "boolean",
    },
    socialProfileConnected: {
      control: "boolean",
    },
    type: {
      options: typeSocials,
      control: { type: "select" },
    },
    manuallyVerification: {
      control: "boolean",
    },
    completed: {
      control: "boolean",
    },
    stepsCompleted: {
      control: { type: "array" },
    },
    activities: {
      control: { type: "array" },
    },
    steps: {
      control: { type: "number" },
    },
    earned: {
      control: { type: "number" },
    },
  },
};

const Template = (args) => (
  <div>
    <Listing {...args} />
  </div>
);

export const Default = Template.bind();

const connectSocialMedias = (app) => alert(`connectSocialMedias called with app: ${app}`);
const onSignUp = () => alert("Sign up.");
const viewYourReceipt = () => alert("View receipt.");
const manuallyComplete = () => alert("Manually complete");
const readMore = () => alert("Read more");
const getSnapshotDetails = () => Promise.resolve({
  activity: {
    space: "thrivecoin.ch",
    space_link: "https://snapshot.org/#/thrivecoin.eth",
    role: "admin",
    contributions_count: 3,
    rewards_earned: 90,
    with_progress: true,
    voted_proposals: 3,
    proposals_count: 10,
  }
});
const getActivityDetails = () => Promise.resolve({
  activity: {
    conditions: {
      discord_server: "[ThriveCoin](https://app.thrivecoin.com)",
      role: "Admin",
      verification_speed: "within 1 hour"
    },
    rewards_earned: 90,
  }
});

Default.args = {
  name: "Administer three spaces on Snapshot",
  description: "Showcase your leadership in governance. We are recognizing and rewarding anyone that holds the “Administrator” role in at least two Snapshot spaces.",
  activities: ["Create"],
  canCompleteMultipleTimes: false,
  type: "snapshot_app",
  isAuthenticated: true,
  socialProfileConnected: true,
  manuallyVerification: false,
  completed: false,
  reward: 30,
  completedCount: 3,
  contributions_per_user: 5,
  steps: 3,
  earned: 60,
  getSnapshotDetails,
  getActivityDetails,
  onSignUp,
  viewYourReceipt,
  manuallyComplete,
  connectSocialMedias,
  readMore,
};
