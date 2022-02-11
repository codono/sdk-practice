import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Snackbar } from './Snackbar';

export default {
  title: 'Aris-Web/Snackbar',
  component: Snackbar,
  argTypes: {
    buttonFunc: { action: 'button' }
  }
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  variant: 'info'
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  variant: 'success'
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  variant: 'warning'
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  variant: 'error'
};

export const SmallMsgBox = Template.bind({});
SmallMsgBox.args = {
  variant: 'smallMsg'
};

export const LargeMsgBox = Template.bind({});
LargeMsgBox.args = {
  variant: 'largeMsg'
};
