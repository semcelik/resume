import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { GitHubIcon, GmailIcon } from 'components/Icons';

import { HrefType } from 'constants/common';
import ContactCard, { TContactCardProps } from '.';

export default {
  title: 'Components/ContactCard',
  component: ContactCard,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: HrefType,
      },
    },
  },
} as Meta;

const Template: Story<TContactCardProps> = (args) => <ContactCard {...args} />;

export const WithHttps = Template.bind({});
WithHttps.args = {
  type: HrefType.https,
  icon: GitHubIcon,
  link: 'github.com/semcelik',
};

export const WithMailTo = Template.bind({});
WithMailTo.args = {
  type: HrefType.mail,
  icon: GmailIcon,
  link: 's.celikce@gmail.com',
};
