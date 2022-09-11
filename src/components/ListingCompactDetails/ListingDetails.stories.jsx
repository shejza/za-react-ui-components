import React from "react";
import { mapToSelect, mapToText } from "../storyTools";
import ListingCompactDetails, { COMPONENTS } from "./ListingCompactDetails";
import { typeSocials } from "../../constants";

const textProperties = [
  "ImageURL",
  "title",
  "description",
  "qualifyingSpaces",
  "qualifyingDates",
  "qualifyingProposals",
  "additionalTerms",
  "type",
];

export default {
  title: "ListingCompactDetails",
  component: ListingCompactDetails,
  argTypes: {
    ...mapToText(textProperties),
    type: {
      options: typeSocials,
      control: { type: "select" },
    },
    reward: {
      control: { type: "number" },
    },
    isCompleted: {
      control: "boolean",
    },
    canCompleteMultipleTimes: {
      control: "boolean",
    },
    completedCount: {
      control: { type: "number" },
    },
    socialProfileConnected: {
      control: "boolean",
    },
    isAuthenticated: {
      control: "boolean",
    }
  },
};

const Template = (args) => (
  <div>
    <ListingCompactDetails {...args} />
  </div>
);

export const Default = Template.bind();

const onSignUp = () => alert("Sign up.");
const viewYourReceipt = () => alert("View receipt.");
const connectSocialMedias = () => true;
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
    description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
});

Default.args = {
  type: "snapshot_app",
  isAuthenticated: true,
  socialProfileConnected: true,
  getActivityDetails,
  connectSocialMedias,
  onSignUp,
  getSnapshotDetails
};
