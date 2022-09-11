import React from "react";
import CardFinal from "./CardFinal";

export default {
  title: "CardFinal",
  component: CardFinal,
  argTypes: {
    reward: {
      control: { type: "number" },
    },
    isPrevious: {
      control: "boolean"
    }
  },
};

const Template = ({ ...args }) => (
  <div>
    <CardFinal {...args}></CardFinal>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  reward: 100,
  stepsLeft: 2,
  challengeCompleted: false
};
