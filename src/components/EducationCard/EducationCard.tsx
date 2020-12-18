import React, { ReactElement } from 'react';

import Text from 'components/Text';
import Image from 'components/Image';

import { FontSize } from 'constants/props';
import { TEducationCardProps } from './EducationCard.types';
import { Container, Content, ImageWrapper, InfoWrapper, MajorText } from './EducationCard.style';

function EducationCard({
  schoolId,
  imageSrc,
  year,
  gpa,
  majorId,
}: TEducationCardProps): ReactElement {
  return (
    <Container>
      <ImageWrapper>
        {imageSrc && <Image width="64px" height="auto" src={imageSrc} alt="School logo" />}
      </ImageWrapper>
      <Content>
        <Text textId={schoolId} size={FontSize.large} />
        <InfoWrapper>
          <Text size={FontSize.xsmall}>{year}</Text>
          {gpa && <Text textId="label.gpa" values={{ gpa: String(gpa) }} size={FontSize.xsmall} />}
        </InfoWrapper>
        {majorId && <MajorText textId={majorId} />}
      </Content>
    </Container>
  );
}

export default EducationCard;
