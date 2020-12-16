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
    schoolId: ARG_TYPES.id,
    majorId: ARG_TYPES.id,
  },
  args: {
    schoolId: 'page.education.iu.school',
    year: '2012-2017',
    gpa: 3.12,
    majorId: 'page.education.iu.major',
  },
} as Meta;

const Template: Story<TEducationCardProps> = (args) => <EducationCard {...args} />;

export const WithImage = Template.bind({});

WithImage.argTypes = {
  imageSrc: {
    defaultValue: IMAGES.iuImage,
    ...ARG_TYPES.images,
  },
};

export const WithoutImage = Template.bind({});
