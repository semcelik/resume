import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { TBarProps } from './Bar.types';
import Bar from '.';

export default {
  title: 'Components/Bar',
  component: Bar,
  argTypes: {
    titleId: { defaultValue: 'Turkish' },
    descriptionId: { defaultValue: 'native' },
    percentage: { control: { type: 'range', min: 0, max: 100 }, defaultValue: 20 },
  },
} as Meta;

const Template: Story<TBarProps> = (args) => <Bar {...args} />;

export const Default = Template.bind({});
