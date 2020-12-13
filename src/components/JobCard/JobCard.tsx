import React, { ReactElement, useMemo } from 'react';

import { DateIcon } from 'components/Icons';
import Text from 'components/Text';

import getFormattedDate from 'helpers/getFormattedDate';

import { TJobCardProps } from './JobCard.types';
import {
  Container,
  Content,
  DateText,
  DateWrapper,
  ImageWrapper,
  SubTitleText,
} from './JobCard.style';
import { FontSize, FontWeight } from '../Text/Text.constants';

function JobCard({
  titleId,
  subTitleId,
  descriptionId,
  startedAt,
  finishedAt,
  imageSrc,
}: TJobCardProps): ReactElement {
  const date = useMemo(() => {
    const formattedStartedAt = getFormattedDate({ dateString: startedAt });
    const formattedFinishedAt = getFormattedDate({ dateString: finishedAt, defaultValue: '...' });

    return [formattedStartedAt, formattedFinishedAt].join(' - ');
  }, [startedAt, finishedAt]);

  return (
    <Container>
      <Content>
        <Text textId={titleId} size={FontSize.large} />
        <SubTitleText textId={subTitleId} />
        <Text textId={descriptionId} fontWeight={FontWeight.light} />
        <DateWrapper>
          <DateIcon iconColor="primary" />
          <DateText fontWeight={FontWeight.light} size={FontSize.small}>
            {date}
          </DateText>
        </DateWrapper>
      </Content>
      <ImageWrapper>
        {imageSrc && <img width="72px" height="auto" src={imageSrc} alt="Job Logo" />}
      </ImageWrapper>
    </Container>
  );
}

export default JobCard;
