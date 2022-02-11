import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Searchbar } from './Searchbar';

export default {
  title: 'Aris-Web/Searchbar',
  component: Searchbar,
  argTypes: {
    onClick: { action: 'search click' }
  }
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = (args) => (
  <Searchbar {...args} />
);

export const DefaultSearchbar = Template.bind({});
DefaultSearchbar.args = {};

export const AdminSearchbar = Template.bind({});
AdminSearchbar.args = {
  variant: 'admin'
};
