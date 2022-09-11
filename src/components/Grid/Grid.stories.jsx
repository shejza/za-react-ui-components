
import React from "react";
import styled from "styled-components";
import Grid from "./Grid";

export default {
  title: "Grid",
  component: Grid
};

const Item = styled.div`
  padding: 10px;
  border: 5px solid green;
  background-color: rgb(0 255 149 / 15%);
  border-radius: 5px;
`;

const Template = args => (<Grid {...args}>
  <Item>One</Item>
  <Item>Two</Item>
  <Item>this is the one special item that has more content that the other ones</Item>
  <Item>four</Item>
  <Item>five</Item>
</Grid>);

export const Default = Template.bind({});

Default.args = {
  columns: "150px 150px 300px",
  gap: "20px"
};

export const Example1 = Template.bind({});

Example1.args= {
  title: "Example one"
};

