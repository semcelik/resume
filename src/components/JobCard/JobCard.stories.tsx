import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import IMAGES from 'constants/images';
import { ARG_TYPES } from 'constants/storybook';
import { TJobCardProps } from './JobCard.types';
import JobCard from '.';

export default {
  title: 'Components/JobCard',
  component: JobCard,
  argTypes: {
    titleId: ARG_TYPES.id,
    subTitleId: ARG_TYPES.id,
    descriptionId: ARG_TYPES.id,
  },
  args: {
    titleId: 'test.sample',
    subTitleId: 'test.sample',
    descriptionId: 'test.sample',
    startedAt: '2018-4',
  },
} as Meta;

const Template: Story<TJobCardProps> = (args) => <JobCard {...args} />;

export const WithoutFinishedAt = Template.bind({});

WithoutFinishedAt.argTypes = {
  imageSrc: { defaultValue: IMAGES.iyzicoImage, ...ARG_TYPES.images },
};

export const WithoutImage = Template.bind({});

WithoutImage.args = {
  finishedAt: '2019-05',
};

export const WithImage = Template.bind({});

WithImage.argTypes = {
  imageSrc: { defaultValue: IMAGES.iyzicoImage, ...ARG_TYPES.images },
};

WithImage.args = {
  finishedAt: '2019-05',
};
