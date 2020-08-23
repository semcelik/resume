import React, { ReactElement } from 'react';

import Box from 'components/Box';
import Text from 'components/Text';

import useTheme from 'hooks/useTheme';
import { TSkillCardProps } from './SkillCard.types';

function SkillCard({ icon: Icon, textId }: TSkillCardProps): ReactElement {
  const { theme } = useTheme();

  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="center"
      paddingHorizontal={theme.spacing.spacing100}
      paddingVertical={theme.spacing.spacing50}>
      <Icon width="24px" height="24px" />
      <Box as={Text} textId={textId} size="xsmall" marginTop={theme.spacing.spacing50} center />
    </Box>
  );
}

export default SkillCard;
