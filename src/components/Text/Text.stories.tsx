import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { TTextProps } from './Text.types';
import Text from '.';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<TTextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  textId: 'test.sample',
};
