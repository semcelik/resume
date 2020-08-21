import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Pill from '.';
import { TPillProps } from './Pill.types';

export default {
  title: 'Components/Pill',
  component: Pill,
} as Meta;

const Template: Story<TPillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});

Default.args = {
  textId: 'test.sample',
};
