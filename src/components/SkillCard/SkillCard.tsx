import React, { ReactElement } from 'react';

import Text from 'components/Text';

import { FontSize } from 'constants/props';
import { TSkillCardProps } from './SkillCard.types';
import { Container, TextWrapper } from './SkillCard.style';

function SkillCard({ icon: Icon, textId }: TSkillCardProps): ReactElement {
  return (
    <Container>
      <Icon width="24px" height="24px" />
      <TextWrapper>
        <Text textId={textId} size={FontSize.xsmall} />
      </TextWrapper>
    </Container>
  );
}

export default SkillCard;
