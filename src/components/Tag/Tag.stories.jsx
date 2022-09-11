import React, {useState} from "react";
import Tag from "./Tag";
import IconSvg from "../IconSvg/IconSvg";
import Box from "../Box/Box";
import { mapToText } from "../storyTools";

const items = [
  "Quick, easy, free",
  "Must live in specific place",
  "Application required",
  "Specialized background required",
  "Free to join",
];

const textProperties = [
  "bgColor",
  "color",
  "borderColor",
  "borderRadius",
  "heightSize",
  "padding",
];

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    ...mapToText(textProperties),
    widthFull: {
      control: "boolean",
    },
    bold: {
      control: "boolean",
    },
  },
};

const Template = ({ items, ...args }) => (
  <div>
    {items.map(text => <Tag {...args}>{text}</Tag>)}
  </div>
);

const Template2 = ({ items, ...args }) => {
  const [tags, setTags] = useState(items);
  const remove = item => setTags(tags.filter(x=> x !== item));
  return (
    <Box flex>
      {tags.map(text => <Tag {...args}>{text} <IconSvg pointer onClick={()=> remove(text)} icon='x'/></Tag>)}
    </Box>
  );};

export const Default = Template.bind({});

export const Example2 = Template2.bind({});

Default.args = {
  items
};
Example2.args = { title: "Removeable tags",items};
