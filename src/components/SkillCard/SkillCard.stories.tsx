import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ApolloIcon, ReactIcon } from 'components/Icons';

import { TSkillCardProps } from './SkillCard.types';
import SkillCard from '.';

export default {
  title: 'Components/SkillCard',
  component: SkillCard,
} as Meta;

const Template: Story<TSkillCardProps> = (args) => <SkillCard {...args} />;

// TODO(semih): selectable icons in control doesnt work right now
export const WithReactIcon = Template.bind({});

WithReactIcon.args = {
  textId: 'React',
  icon: ReactIcon,
};

export const WithApolloIcon = Template.bind({});

WithApolloIcon.args = {
  textId: 'Apollo',
  icon: ApolloIcon,
};
