import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Box from '.';
import { TBoxProps } from './Box.types';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color', defaultValue: '#C4C4C4' },
    width: { defaultValue: '48px' },
    height: { defaultValue: '48px' },
  },
} as Meta;

const Template: Story<TBoxProps> = (args) => <Box {...args} />;

export const Default = Template.bind({});

export const WithText = Template.bind({});

WithText.args = {
  children: 'text',
};

export const WithMultipleBoxes = Template.bind({});

WithMultipleBoxes.args = {
  width: '500px',
  height: '500px',
  display: 'flex',
  alignItems: 'initial',
  justifyContent: 'initial',
  children: (
    <>
      <Box width="64px" height="64px" backgroundColor="red" />
      <Box width="64px" height="64px" backgroundColor="gray" />
      <Box width="64px" height="64px" backgroundColor="green" />
      <Box width="64px" height="64px" backgroundColor="blue" />
    </>
  ),
};
