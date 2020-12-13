import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ARG_TYPES } from 'constants/storybook';
import { TBarProps } from './Bar.types';
import Bar from '.';

export default {
  title: 'Components/Bar',
  component: Bar,
  argTypes: {
    titleId: ARG_TYPES.id,
    descriptionId: ARG_TYPES.id,
    percentage: { control: { type: 'range', min: 0, max: 100 }, defaultValue: 20 },
  },
  args: {
    titleId: 'test.sample',
    descriptionId: 'test.sample',
  },
} as Meta;

const Template: Story<TBarProps> = (args) => <Bar {...args} />;

export const Default = Template.bind({});
