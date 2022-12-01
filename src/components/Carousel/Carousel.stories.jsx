import React from "react";
import Carousel from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
};
const slides = [
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1554424944-d72b391975b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)",
  },
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1668365187350-05c997d09eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  },
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1667660175718-008e535dc84f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
  },
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1621261574254-b3f12a818202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)",
  },
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1469217329261-b173b63012f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  },
  {
    eachSlide:
      "url(https://images.unsplash.com/photo-1665127166570-c73c51a65809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
  },
];

const Template = ({ ...args }) => <Carousel slides={slides} {...args}/>;

export const Default = Template.bind({});

Default.args = {
  //slides: [
  //  {
  //    eachSlide:
  //      "url(https://images.unsplash.com/photo-1554424944-d72b391975b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)",
  //  },
  //  {
  //    eachSlide:
  //      "url(https://images.unsplash.com/photo-1668365187350-05c997d09eba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  //  },
  //  {
  //    eachSlide:
  //      "url(https://images.unsplash.com/photo-1667660175718-008e535dc84f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
  //  },
  //  {
  //    eachSlide:
  //      "url(https://images.unsplash.com/photo-1621261574254-b3f12a818202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)",
  //  },
  //  {
  //    eachSlide:
  //      "url(https://images.unsplash.com/photo-1469217329261-b173b63012f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
  //  },
  //  {
  //    eachSlide:
  //      "url(https://images.unsplash.com/photo-1665127166570-c73c51a65809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
  //  },
  //],
};
