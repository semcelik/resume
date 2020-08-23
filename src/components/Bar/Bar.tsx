import React, { ReactElement } from 'react';

import Text from 'components/Text';
import Box from 'components/Box';

import useTheme from 'hooks/useTheme';
import { TBarProps } from './Bar.types';

function Bar({ titleId, percentage, descriptionId }: TBarProps): ReactElement {
  const { theme } = useTheme();

  return (
    <Box marginBottom={theme.spacing.spacing300} width="100%">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={theme.spacing.spacing100}>
        <Text textId={titleId} size="large" />
        <Text textId={descriptionId} />
      </Box>
      <Box height="5px" position="relative">
        <Box
          width={`${percentage}%`}
          height="100%"
          backgroundColor={theme.color.barBackgroundFilled}
          position="absolute"
          borderRadius="2px"
          left="0"
        />
        <Box
          width="100%"
          height="100%"
          backgroundColor={theme.color.barBackground}
          borderRadius="2px"
        />
      </Box>
    </Box>
  );
}

export default Bar;
