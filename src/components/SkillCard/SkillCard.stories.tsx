import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ApolloIcon, TypeScriptIcon } from 'components/Icons';

import { ARG_TYPES } from 'constants/storybook';
import { TSkillCardProps } from './SkillCard.types';
import SkillCard from '.';

export default {
  title: 'Components/SkillCard',
  component: SkillCard,
  argTypes: {
    textId: ARG_TYPES.id,
  },
} as Meta;

const Template: Story<TSkillCardProps> = (args) => <SkillCard {...args} />;

// TODO(semih): selectable icons in control doesnt work right now
export const WithTypescriptIcon = Template.bind({});

WithTypescriptIcon.args = {
  icon: TypeScriptIcon,
  textId: 'page.skills.typescript',
};

export const WithReactIcon = Template.bind({});

WithReactIcon.args = {
  icon: ApolloIcon,
  textId: 'page.skills.react',
};
