import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';

export default {
  title: 'Aris-Web/Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const PrimaryTag = Template.bind({});
PrimaryTag.args = {
  label: 'Tag'
};

export const SecondaryTag = Template.bind({});
SecondaryTag.args = {
  variant: 'secondary',
  label: 'Tag'
};

export const OutlineTag = Template.bind({});
OutlineTag.args = {
  variant: 'outline',
  label: 'Tag'
};

export const RoundTag = Template.bind({});
RoundTag.args = {
  variant: 'round',
  label: 'Tag'
};

export const RoundOutlineTag = Template.bind({});
RoundOutlineTag.args = {
  variant: 'roundOutline',
  label: 'Tag'
};
