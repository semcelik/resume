import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import IMAGES from 'constants/images';
import { ARG_TYPES } from 'constants/storybook';
import { TEducationCardProps } from './EducationCard.types';
import EducationCard from '.';

export default {
  title: 'Components/EducationCard',
  component: EducationCard,
  argTypes: {
    school: ARG_TYPES.id,
    year: ARG_TYPES.id,
    gpa: ARG_TYPES.id,
    major: ARG_TYPES.id,
  },
  args: {
    school: 'test.sample',
    year: 'test.sample',
    gpa: 'test.sample',
    major: 'test.sample',
  },
} as Meta;

const Template: Story<TEducationCardProps> = (args) => <EducationCard {...args} />;

export const WithImage = Template.bind({});

// FIXME: (semih) add more accurate samples
WithImage.argTypes = {
  imageSrc: {
    defaultValue: IMAGES.iuImage,
    ...ARG_TYPES.images,
  },
};

export const WithoutImage = Template.bind({});
