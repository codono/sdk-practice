import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Aris-Web/Breadcrumb',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const BreadCrumbEx = Template.bind({});
BreadCrumbEx.args = {
  list: [
    { title: '1', href: '/' },
    { title: '2', href: '/' },
    { title: '3', href: '/' }
  ]
};
