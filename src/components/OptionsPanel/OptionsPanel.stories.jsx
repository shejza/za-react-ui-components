import React from "react";
import OptionsPanel from "./OptionsPanel";
import Text from "../Text/Text";
import IconSvg from "../IconSvg/IconSvg";

export default {
  title: "OptionsPanel",
  component: OptionsPanel,
};

const onClick = (event)=> window.alert(`you clicked: ${event.target.innerText}`);

const Template = (args) => (
  <OptionsPanel {...args}>
    <Text onClick={onClick} pointer spacing="mb-4">
      <IconSvg icon="copy" width="1em" spacing="mr-2" />
      Copy referral URL
    </Text>
    <Text onClick={onClick} pointer spacing="mb-4">
      <IconSvg icon="repeat" width="1em" spacing="mr-2" />
      Switch to treasury balance
    </Text>
    <Text onClick={onClick} pointer>
      <IconSvg icon="wallet" width="1em" spacing="mr-2" />
      Disconnect wallet
    </Text>
  </OptionsPanel>
);

export const Default = Template.bind({});

Default.args = {};
