import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ARG_TYPES } from 'constants/storybook';
import IMAGES from 'constants/images';
import Image, { TImageProps } from '.';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: ARG_TYPES.images,
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
  },
  args: {
    src: IMAGES.wamoImage,
    alt: 'Image',
    width: 72,
    height: 'auto',
  },
} as Meta;

const Template: Story<TImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
