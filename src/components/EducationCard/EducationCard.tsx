import React, { ReactElement } from 'react';

import Text from 'components/Text';

import { TEducationCardProps } from './EducationCard.types';
import { Container, Content, ImageWrapper, InfoWrapper, MajorText } from './EducationCard.style';
import { FontSize } from '../Text/Text.constants';

function EducationCard({ school, imageSrc, year, gpa, major }: TEducationCardProps): ReactElement {
  return (
    <Container>
      <ImageWrapper>
        {imageSrc && <img width="64px" height="auto" src={imageSrc} alt="School logo" />}
      </ImageWrapper>
      <Content>
        <Text textId={school} size={FontSize.large} />
        <InfoWrapper>
          <Text textId={year} size={FontSize.xsmall} />
          {gpa && <Text textId="label.gpa" values={{ gpa }} size={FontSize.xsmall} />}
        </InfoWrapper>
        {major && <MajorText textId={major} />}
      </Content>
    </Container>
  );
}

export default EducationCard;
