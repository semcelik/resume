import React, { ReactElement, memo } from 'react';

import Text from 'components/Text';
import Box from 'components/Box';

import useTheme from 'hooks/useTheme';
import { TPillProps } from './Pill.types';

function Pill({ textId }: TPillProps): ReactElement {
  const { theme } = useTheme();

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      paddingHorizontal={theme.spacing.spacing100}
      paddingVertical={theme.spacing.spacing50}
      backgroundColor={theme.color.pillBackground}
      borderRadius="8px">
      <Text textId={textId} size="small" color={theme.color.pillText} />
    </Box>
  );
}

export default memo(Pill);
