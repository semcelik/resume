import React, { ReactElement } from 'react';

import Box from 'components/Box';
import Text from 'components/Text';

import useTheme from 'hooks/useTheme';
import { TEducationCardProps } from './EducationCard.types';

function EducationCard({ school, imageSrc, year, gpa, major }: TEducationCardProps): ReactElement {
  const { theme } = useTheme();

  return (
    <Box display="flex">
      <Box width="64px" height="64px" display="flex" alignItems="center" justifyContent="center">
        {imageSrc && <img width="64px" height="auto" src={imageSrc} alt="School logo" />}
      </Box>
      <Box marginLeft={theme.spacing.spacing200} flexGrow={1}>
        <Box as={Text} textId={school} size="large" marginBottom={theme.spacing.spacing50} block />
        <Box display="flex" justifyContent="space-between">
          <Text textId={year} size="xsmall" />
          {gpa && <Text textId="label.gpa" values={{ gpa }} size="xsmall" />}
        </Box>
        {major && <Box as={Text} marginTop={theme.spacing.spacing200} textId={major} block />}
      </Box>
    </Box>
  );
}

export default EducationCard;
