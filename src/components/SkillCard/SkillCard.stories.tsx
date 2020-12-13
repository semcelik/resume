import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ApolloIcon, ReactIcon } from 'components/Icons';

import { ARG_TYPES } from 'constants/storybook';
import { TSkillCardProps } from './SkillCard.types';
import SkillCard from '.';

export default {
  title: 'Components/SkillCard',
  component: SkillCard,
  argTypes: {
    textId: ARG_TYPES.id,
  },
  args: {
    textId: 'test.sample',
  },
} as Meta;

const Template: Story<TSkillCardProps> = (args) => <SkillCard {...args} />;

// TODO(semih): selectable icons in control doesnt work right now
export const WithReactIcon = Template.bind({});

WithReactIcon.args = {
  icon: ReactIcon,
};

export const WithApolloIcon = Template.bind({});

WithApolloIcon.args = {
  icon: ApolloIcon,
};
