import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import IMAGES from 'constants/images';
import { TJobCardProps } from './JobCard.types';
import JobCard from '.';

export default {
  title: 'Components/JobCard',
  component: JobCard,
  argTypes: {
    titleId: { defaultValue: 'Software Engineer' },
    subTitleId: { defaultValue: 'sample company' },
    descriptionId: { defaultValue: 'Worked as sample project and sample project with Javascript' },
    startedAt: { defaultValue: '2018-4' },
  },
} as Meta;

const Template: Story<TJobCardProps> = (args) => <JobCard {...args} />;

export const WithoutFinishedAt = Template.bind({});

WithoutFinishedAt.args = {
  imageSrc: IMAGES.iyzicoImage,
};

export const WithoutImage = Template.bind({});

WithoutImage.args = {
  finishedAt: '2019-05',
};

export const WithImage = Template.bind({});

WithImage.args = {
  imageSrc: IMAGES.iyzicoImage,
  finishedAt: '2019-05',
};
