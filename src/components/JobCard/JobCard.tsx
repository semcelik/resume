import React, { ReactElement, useMemo } from 'react';

import Box from 'components/Box';
import { DateIcon } from 'components/Icons';
import Text from 'components/Text';

import useTheme from 'hooks/useTheme';
import getFormattedDate from 'helpers/getFormattedDate';

import { TJobCardProps } from './JobCard.types';

function JobCard({
  titleId,
  subTitleId,
  descriptionId,
  startedAt,
  finishedAt,
  imageSrc,
}: TJobCardProps): ReactElement {
  const { theme } = useTheme();
  const date = useMemo(() => {
    const formattedStartedAt = getFormattedDate({ dateString: startedAt });
    const formattedFinishedAt = getFormattedDate({ dateString: finishedAt, defaultValue: '...' });

    return [formattedStartedAt, formattedFinishedAt].join(' - ');
  }, [startedAt, finishedAt]);

  return (
    <Box display="flex" flexDirection="row">
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Text textId={titleId} size="large" />
        <Box as={Text} textId={subTitleId} marginBottom={theme.spacing.spacing100} block />
        <Text textId={descriptionId} fontType="light" />
        <Box display="flex" alignItems="center" marginTop={theme.spacing.spacing200}>
          <DateIcon iconColor={theme.color.primary} />
          <Box as={Text} marginLeft={theme.spacing.spacing50} fontType="light" size="small">
            {date}
          </Box>
        </Box>
      </Box>
      <Box
        marginLeft={theme.spacing.spacing200}
        minWidth="72px"
        width="72px"
        height="72px"
        display="flex"
        alignItems="center"
        justifyContent="center">
        {imageSrc && <img width="72px" height="auto" src={imageSrc} alt="Job Logo" />}
      </Box>
    </Box>
  );
}

export default JobCard;
