import React, { ReactElement, useMemo } from 'react';
import { useTheme } from 'styled-components';

import { DateIcon } from 'components/Icons';
import Text from 'components/Text';
import Image from 'components/Image';

import getFormattedDate from 'helpers/getFormattedDate';
import { FontSize, FontWeight } from 'constants/props';
import { TJobCardProps } from './JobCard.types';
import {
  Container,
  Content,
  DateText,
  DateWrapper,
  ImageWrapper,
  SubTitleText,
} from './JobCard.style';

function JobCard({
  titleId,
  subTitleId,
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

  return (
    <Container>
      <Content>
        <Text textId={titleId} size={FontSize.large} />
        <SubTitleText textId={subTitleId} />
        <Text textId={descriptionId} fontWeight={FontWeight.light} />
        <DateWrapper>
          <DateIcon iconColor={colors.primary} />
          <DateText fontWeight={FontWeight.light} size={FontSize.small}>
            {date}
          </DateText>
        </DateWrapper>
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
  );
}

export default JobCard;
