import React from "react";
import CardSimple from "./CardSimple";
import SparklesImage from "../assets/sparkles.svg";
import SparklesImage2 from "../assets/sparkles2.svg";
import { mapToText } from "../storyTools";

const textProperties = [
  "title",
  "description",
  "tagText",
  "buttonStep",
]

export default {
  title: "CardSimple",
  component: CardSimple,
  argTypes: {
    ...mapToText(textProperties),
    statusToggle: {
      control: "boolean",
    },
    reward: {
      control: { type: "number" },
    },
    totalNumSteps: {
      control: { type: "number" },
    },
    stepNum: {
      control: { type: "number" },
    },
    underReview: {
      control: "boolean",
    },
    isRejected: {
      control: "boolean",
    },
    isClosed: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    isPrevious: {
      control: "boolean",
    },
    isAbandoned: {
      control: "boolean",
    },
  },
};

const cardData = (amount) => {
  return [...Array(amount)].map((item, index) => ({
    title: "Use your voice",
    content: "this is a box",
    tagText: "Active",
    statusToggle: true,
    description: "You learned how to use your voice to make a difference for people in Ukraine.",
    reward: 100,
    buttonStep: `Start Step ${index + 1}`,
    totalNumSteps: 3,
    stepNum: index + 1,
    numCharacters: 131,
    stepCompleted: false,
    underReview: false,
    isRejected: false,
    disabled: false,
    isPrevious: false,
    isAbandoned: false,
    SparklesImageSimple: SparklesImage,
    SparklesImageSimple2: SparklesImage2,
    onClick,
  }));
};

const Template = (props) => (
  <div>
    <CardSimple {...props}></CardSimple>
  </div>
);

export const Default = Template.bind({});

const onClick = () => alert("this card was clicked");

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/iC7GRmB02aUuI11zTIOGoo/Alpha-User-Flow?node-id=7345%3A6992",
  },
};

Default.args = {
  ...cardData(1)[0],
};

const Template2 = ({ cards }) => (
  <div>
    {cards.map((card, index) => (
      <CardSimple key={index} {...card} />
    ))}
  </div>
);

export const Example2 = Template2.bind({});

Example2.args = {
  cards: cardData(3),
};
