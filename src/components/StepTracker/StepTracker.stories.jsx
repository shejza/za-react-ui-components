import React from "react";
import styled from "styled-components";
import Box from "../Box/Box";
import IconSvg from "../IconSvg/IconSvg";
import StepTracker from "./StepTracker";
import Text from "../Text/Text";

const values = [true, true, true, false , null, null];

const headers = () => (
  <>
    <IconWrapper flex={1} alignItems="center">
      <IconSvg color="success500" icon="youtube" spacing="mr-1" />
      <Text bold={1}>Video</Text>
    </IconWrapper>
    <IconWrapper flex={1} alignItems="center">
      <IconSvg color="success500" icon="list" spacing="mr-1" />
      <Text bold={1}>Quiz </Text>
    </IconWrapper>

    <IconWrapperReward flex={1} alignItems="center">
      <IconSvg color="success500" icon="trophy" spacing="mr-1" />
      <Text bold={1}>Reward</Text>
    </IconWrapperReward>
  </>
);

const IconWrapper = styled(Box)`
  margin-top: 25px;
`;

const IconWrapperReward = styled(Box)`
  margin-top: 25px;
  grid-column: 10;
`;

export default {
  title: "StepTracker",
  component: StepTracker,
};

const Template = (args) => (
  <Box spacing="mt-9">
    <StepTracker {...args} />
  </Box>
);

export const Default = Template.bind({});

Default.args = {
  values,
  headers: headers(),
  revert: false,
  hasPending: true
};

export const Example2 = Template.bind({});

Example2.args = {
  values: [true, false],
  hasPending: false
};

const values2 = [true, false];
const names = ["this is a header", "this is another header, wiht some extra content"];

const Headers = ()=>{
  const headers = values2.map((value, index) => (
    <StepName key={index} name={names[index]} status={value} step={index+1} isLast={index === values.length - 1} />
  ));
  return <>{headers}</>;
};

const StepName = ({ name, step, isLast, status }) => {
  let props = isLast ? { justifyContent: "flex-end", width: "100%", spacing: "-mr-8" } : {};
  props = step == 1 ? { justifySelf: "start", spacing: "-ml-6" } : props;
  const isPending = status == false;

  return (
    <Box flex spacing="mt-3" {...props}>
      <Text spacing="mt-3" color={isPending ? "tertiary400" : "secondary500"} semiBold size="14px">
        {step}. {name}
      </Text>
    </Box>
  );
};


const Template2 = (args) => (
  <Box spacing="mt-9">
    <StepTracker {...args}>
    </StepTracker>
  </Box>
);

export const Example3= Template2.bind({});

Example3.args = {
  values: values2,
  revert: true,
  headers: Headers(),
  hasPending: false
};
