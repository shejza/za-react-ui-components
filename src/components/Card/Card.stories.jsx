import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    hideAccordion: {
      control: "boolean",
    },
  },
};

const cards = [
  {
    id: 1,
    title: "Tiger",
    image:
      "https://plus.unsplash.com/premium_photo-1661963380682-8fcaf8ca7650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    description:
      "The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. ",
  },
];

const ShareButtonList = () => {
  const onClickShare = (event) => window.alert(`you clicked: ${event.target.innerText}`);

  return(
    <>
   <ul>
    <li>Item 1</li>
    <li>Item 2 </li>
    </ul>
  </>
  )
};

const CardHeader = () => {
  return(
    <>
   <h1>This is a header </h1>
  </>
  )
};

const Template = ({ ...args }) => (
  <div>
    {cards.map((card) => (
      <Card {...args}  key={card.id}>
        <div>Text here</div>
      </Card>
    ))}
  </div>
);

export const Default = Template.bind({});

Default.parameters = {};

Default.args = {
  active: false,
  title: "Text",
  image_url:
    "https://images.unsplash.com/photo-1554424944-d72b391975b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  title: "Title goes here",
  subtitle: "Subtitle goes here",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ShareButtonList: ShareButtonList,
    cardHorizontal: false,
    cardHideExpandable: false,
    width: "400px",
    className: "card"
    //CardHeader: CardHeader
};
