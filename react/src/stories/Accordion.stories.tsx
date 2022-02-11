import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
  title: 'Aris-Web/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Accodion48 = Template.bind({});
Accodion48.args = {};

export const Accodion80 = Template.bind({});
Accodion80.args = {
  height: 'lg',
  subtitle: 'accordion subtitle'
};
