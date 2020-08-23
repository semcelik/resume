import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Box from 'components/Box';
import Text from 'components/Text';

import * as icons from '.';

export default {
  title: 'Design System/Icons',
  component: Icons,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<{ color: string }> = (args) => <Icons {...args} />;

export const Default = Template.bind({});

function Icons({ color }: { color: string }) {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {Object.entries(icons).map(([name, Icon]) => (
        <Box key={name} display="flex" flexDirection="column" alignItems="center" margin="16px">
          <Icon width="48px" height="48px" iconColor={color} />
          <Box as={Text} marginTop="8px">
            {name}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
