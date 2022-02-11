import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Aris-Web/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const SelectDropdown = Template.bind({});
SelectDropdown.args = {
  variant: 'select',
  placeholder: 'select',
  list: [1, 2, 3, 4, 5]
};

export const FilterDropdown = Template.bind({});
FilterDropdown.args = {
  variant: 'filter',
  defaultValue: 1,
  list: [1, 2, 3, 4, 5]
};

export const TextDropdown = Template.bind({});
TextDropdown.args = {
  variant: 'text',
  defaultValue: 1,
  list: [1, 2, 3, 4, 5]
};
