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
    companyId: ARG_TYPES.id,
    jobTitleId: ARG_TYPES.id,
    descriptionId: ARG_TYPES.id,
  },
  args: {
    companyId: 'labels.wamo',
    jobTitleId: 'labels.frontendDeveloper',
    descriptionId: 'pages.professionalHistory.wamo.descriptionId',
    startedAt: '2020-11',
  },
} as Meta;

const Template: Story<TJobCardProps> = (args) => <JobCard {...args} />;

export const WithoutFinishedAt = Template.bind({});

WithoutFinishedAt.argTypes = {
  imageSrc: { defaultValue: IMAGES.wamoImage, ...ARG_TYPES.images },
};

export const WithoutImage = Template.bind({});

WithoutImage.args = {
  finishedAt: '2030-05',
};

export const WithImage = Template.bind({});

WithImage.argTypes = {
  imageSrc: { defaultValue: IMAGES.wamoImage, ...ARG_TYPES.images },
};

WithImage.args = {
  finishedAt: '2030-05',
};
