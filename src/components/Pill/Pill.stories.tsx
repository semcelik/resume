import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ARG_TYPES } from 'constants/storybook';
import { TPillProps } from './Pill.types';
import Pill from '.';

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    textId: ARG_TYPES.id,
  },
  args: {
    textId: 'page.skills.typescript',
  },
} as Meta;

const Template: Story<TPillProps> = (args) => <Pill {...args} />;

export const Default = Template.bind({});
