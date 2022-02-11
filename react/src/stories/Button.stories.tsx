import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Aris-Web/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Button'
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: 'secondary',
  label: 'Button'
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  variant: 'outline',
  label: 'Button'
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  label: 'Button'
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  variant: 'tertiary',
  label: 'Button'
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  variant: 'danger',
  label: 'Button'
};

export const DashButton = Template.bind({});
DashButton.args = {
  variant: 'dash',
  label: 'Button'
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  variant: 'ghost',
  label: 'Button'
};
