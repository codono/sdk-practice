import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Aris-Web/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
  size: 'sm'
};

export const MiddleInput = Template.bind({});
MiddleInput.args = {
  size: 'md'
};

export const LargeInput = Template.bind({});
LargeInput.args = {
  size: 'lg'
};
