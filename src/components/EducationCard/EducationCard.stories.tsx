import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import images from 'constants/images';
import { TEducationCardProps } from './EducationCard.types';
import EducationCard from '.';

export default {
  title: 'Components/EducationCard',
  component: EducationCard,
} as Meta;

const Template: Story<TEducationCardProps> = (args) => <EducationCard {...args} />;

export const WithImage = Template.bind({});

WithImage.args = {
  school: 'Istanbul University',
  imageSrc: images.iuImage,
  year: '2012-2017',
  gpa: '3.12',
  major: 'Computer Engineering',
};

export const WithoutImage = Template.bind({});

WithoutImage.args = {
  school: 'Istanbul University',
  year: '2012-2017',
};
