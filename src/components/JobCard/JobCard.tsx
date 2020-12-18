import React, { ReactElement, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { DateIcon } from 'components/Icons';
import Text from 'components/Text';
import Image from 'components/Image';

import { getDifferenceBetweenDates, getFormattedDate } from 'helpers/date';
import { FontSize, FontWeight } from 'constants/props';
import { TJobCardProps } from './JobCard.types';
import {
  Container,
  Content,
  DateText,
  DateWrapper,
  DateWorkedText,
  DescriptionText,
  ImageWrapper,
} from './JobCard.style';

function JobCard({
  companyId,
  jobTitleId,
  descriptionId,
  startedAt,
  finishedAt,
  imageSrc,
  onDarkFilter,
}: TJobCardProps): ReactElement {
  const { colors } = useTheme();

  const date = useMemo(() => {
    const formattedStartedAt = getFormattedDate({ dateString: startedAt });
    const formattedFinishedAt = getFormattedDate({ dateString: finishedAt, defaultValue: '...' });

    return [formattedStartedAt, formattedFinishedAt].join(' - ');
  }, [startedAt, finishedAt]);

  const workedTime = useMemo(() => getDifferenceBetweenDates(startedAt, finishedAt), [
    startedAt,
    finishedAt,
  ]);

  return (
    <div>
      <Container>
        <Content>
          <Text textId={companyId} size={FontSize.large} />
          <Text textId={jobTitleId} />
          <DescriptionText textId={descriptionId} fontWeight={FontWeight.light} />
        </Content>
        <ImageWrapper>
          {imageSrc && (
            <Image
              width="100%"
              height="auto"
              src={imageSrc}
              alt="Job Logo"
              onDarkFilter={onDarkFilter}
            />
          )}
        </ImageWrapper>
      </Container>
      <DateWrapper>
        <DateIcon iconColor={colors.primary} />
        <DateText fontWeight={FontWeight.light} size={FontSize.small}>
          {date}
        </DateText>
        <DateWorkedText size={FontSize.xsmall} fontWeight={FontWeight.light} color="primary">
          {`(${workedTime})`}
        </DateWorkedText>
      </DateWrapper>
    </div>
  );
}

export default JobCard;
