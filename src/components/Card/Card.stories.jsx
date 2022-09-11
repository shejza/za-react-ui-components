import React from "react";
import { withDesign } from "storybook-addon-designs";
import Card from "./Card";
import CardSimple from "./../CardSimple/CardSimple";
import CardFinal from "./../CardFinal/CardFinal";
import SparklesImage from "../assets/sparkles3.svg";
import SparklesImage2 from "../assets/sparkles4.svg";
import SparklesImageSimple from "../assets/sparkles.svg";
import SparklesImageSimple2 from "../assets/sparkles2.svg";
import { mapToText } from "../storyTools";

const textProperties = ["ImageUrl", "title", "description", "statusText", "buttonJoin", "closesTime"];

export default {
  title: "Card",
  component: Card,
  decorators: [withDesign],
  argTypes: {
    hideAccordion: {
      control: "boolean",
    },
    ...mapToText(textProperties),
    statusToggle: {
      control: "boolean",
    },
    tags: {
      control: "array",
    },
    ActivitiesToggle: {
      control: "boolean",
    },
    reward: {
      control: { type: "number" },
    },
    numMembers: {
      control: { type: "number" },
    },
    membersList: {
      control: "array",
    },
    currentChallenge: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    underReview: {
      control: "boolean",
    },
    daysLeft: {
      control: { type: "number" },
    },
    rewardEarned: {
      control: { type: "number" },
    },
    isAbandoned: {
      control: "boolean",
    },
    activeContributorsCount: {
      control: { type: "number" },
    },
    hideStepsNumber: {
      control: "boolean",
    },
    hideDaysToComplete: {
      control: "boolean",
    },
    hasContributors: {
      control: "boolean",
    },
    hideLastLine: {
      control: "boolean",
    },
    hidePartChallenge: {
      control: "boolean",
    },
    communityManager: {
      control: "boolean",
    }
  },
};

const challenges = [
  {
    id: 1,
    challengeCompleted: false,
    isClosed: true,
    isPrevious: false,
    current_step: { step: 3 },
    cards: [
      {
        id: 1,
        title: "Use your voice",
        description: "You learned how to use your voice to make a difference for people in Ukraine.",
        tagText: "Learn",
        stepCompleted: true,
        stepNext: true,
        reward: 10,
        isRejected: false,
        underReview: false,
      },
      {
        id: 2,
        title: "Use your hands",
        description: "Learn how to use your hands to make a difference for people in Ukraine.",
        tagText: "Learn",
        stepCompleted: true,
        stepNext: true,
        reward: 10,
        isRejected: false,
        underReview: false,
      },
      {
        id: 3,
        title: "Use your home",
        description: "Learn how to use your home - or find homes for Ukrainian refugees to stay in.",
        tagText: "Learn",
        stepCompleted: false,
        stepNext: false,
        reward: 10,
        isRejected: false,
        underReview: false,
      },
      {
        id: 4,
        title: "Headline step",
        description: "Learn how to use your home - or find homes for Ukrainian refugees to stay in.",
        tagText: "Learn",
        stepCompleted: false,
        stepNext: false,
        reward: 10,
        isRejected: false,
        underReview: false,
      },
    ],
  },
];

const Template = ({ ...args }) => (
  <div>
    {challenges.map((challenge) => (
      <Card {...args} key={challenge.id}>
        {challenge.cards.map((card, index) => (
          <CardSimple
            challengeId={card.id}
            key={card.id}
            index={index}
            description={card.description}
            stepNum={index + 1}
            totalNumSteps={challenge.cards.length}
            numCharacters={110}
            buttonStep={"Start Step " + (index + 1)}
            tagText={card.tagText}
            title={card.title}
            stepCompleted={card.stepCompleted}
            goNext={card.stepNext}
            reward={card.reward}
            isRejected={card.isRejected}
            underReview={card.underReview}
            isClosed={card.isClosed}
            SparklesImageSimple={SparklesImageSimple}
            SparklesImageSimple2={SparklesImageSimple2}
            nextActiveLine={challenge.cards[index + 1]?.stepCompleted}
            currentStep={challenge.current_step.step}
          />
        ))}

        <CardFinal
          challengeCompleted={challenge.challengeCompleted}
          reward="300"
          stepsLeft={challenge.cards.length - challenge.cards.filter((card) => card.stepCompleted).length}
        />
      </Card>
    ))}
  </div>
);

export const Default = Template.bind({});

const abandonChallenge = () => alert("challenge abandoned.");
const startChallenge = () => alert("challenge started.");
const editChallenge = () => alert("challenge edited.");
const editExpirationDate = () => alert("challenge expiration date edited.");
const cancelChallenge = () => alert("challenge canceled.");

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/iC7GRmB02aUuI11zTIOGoo/Alpha-User-Flow?node-id=6688%3A6986",
  },
};

Default.args = {
  active: false,
  title: "Learn how to help Ukraine",
  btnTooltip: "You can only attempt to complete this challenge step once every hour.",
  hideAccordion: true,
  statusText: "Active",
  statusToggle: false,
  description: " Watch a video a day for 3 days that teach different ways you can support Ukrainian refugees.",
  tags: ["Vote", "Organize", "Lead"],
  ActivitiesToggle: true,
  reward: "60 $THRIVE",
  numMembers: 1383,
  buttonJoin: "Start challenge",
  closesTime: "Mar 26",
  totalNumSteps: 3,
  stepsCompleted: 1,
  currentChallenge: false,
  percentage: 35,
  isSecondary: false,
  challengeCompleted: false,
  totalTimeCompletion: "6 days",
  isPrevious: false,
  isClosed: false,
  SparklesImage: SparklesImage,
  SparklesImage2: SparklesImage2,
  underReview: false,
  daysLeft: 3,
  rewardEarned: 50,
  isAbandoned: false,
  activeContributorsCount: 432,
  abandonChallenge,
  startChallenge,
  currentStep: 3,
  communityManager: false,
  editChallenge,
  editExpirationDate,
  cancelChallenge,
};
