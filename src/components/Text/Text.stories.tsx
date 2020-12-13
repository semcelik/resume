import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ARG_TYPES } from 'constants/storybook';
import { FontSize, FontWeight } from 'constants/props';
import { TTextProps } from './Text.types';
import Text from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    textId: ARG_TYPES.id,
    color: { control: 'color' },
    size: {
      defaultValue: FontSize.medium,
      control: {
        type: 'select',
        options: FontSize,
      },
    },
    fontWeight: {
      defaultValue: FontWeight.normal,
      control: {
        type: 'select',
        options: FontWeight,
      },
    },
  },
} as Meta;

const Template: Story<TTextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  textId: 'test.sample',
};
