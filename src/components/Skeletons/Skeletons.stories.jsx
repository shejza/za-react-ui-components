import React from "react";
import { SkeletonBox, SkeletonCircle } from "./Skeletons";
import styled from "styled-components";

export default {
  title: "Skeletons",
};
const Container = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 16px;
  border-radius: 4px;
  max-width: 300px;
`;

const Header = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Template = (args) => (
  <Container>
    <Header>
      <SkeletonCircle />
      <SkeletonBox />
    </Header>
    <SkeletonBox />
    <SkeletonBox />
    <SkeletonBox $width="90%" />
  </Container>
);

export const Default = Template.bind({});

Default.args = {};

const Template2 = (args) =><SkeletonBox {...args} />;

export const SkeletonBoxExample = Template2.bind({});

SkeletonBoxExample.args = {
  $width: "100px",
  $height: "200px",
};

const Template3 = (args) =><SkeletonCircle {...args} />;

export const SkeletonCircleExample = Template3.bind({});

SkeletonCircleExample.args = {
  $size: "100px",
};
