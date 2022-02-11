import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datepicker } from './Datepicker';

export default {
  title: 'Aris-Web/Datepicker',
  component: Datepicker
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = (args) => (
  <Datepicker {...args} />
);

export const Datepikcer = Template.bind({});
Datepikcer.args = {};
