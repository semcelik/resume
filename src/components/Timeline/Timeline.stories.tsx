import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Timeline from '.';
import { TTimelineProps } from './Timeline.types';
import Box from '../Box';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
    gap: { defaultValue: '16px' },
    lineTop: { defaultValue: '2px' },
  },
} as Meta;

const Template: Story<TTimelineProps> = (args) => <Timeline {...args} />;

export const WithText = Template.bind({});

WithText.args = {
  lineTop: '0',
  children: [
    <span>Step 6</span>,
    <span>Step 5</span>,
    <span>Step 4</span>,
    <span>Step 3</span>,
    <span>Step 2</span>,
    <span>Step 1</span>,
  ],
};

export const WithContent = Template.bind({});

WithContent.args = {
  children: [
    <Box width="200px" height="36px" backgroundColor="#eee" />,
    <Box width="200px" height="200px" backgroundColor="#ddd" />,
    <Box width="200px" height="40px" backgroundColor="#ccc" />,
    <Box width="200px" height="64px" backgroundColor="#bbb" />,
  ],
};
