import React, { ReactElement } from 'react';
import { useTheme } from 'styled-components';

import Text from 'components/Text';

import Theme from 'constants/theme';
import { FontSize } from 'constants/props';
import { TSkillCardProps } from './SkillCard.types';
import { Container, TextWrapper } from './SkillCard.style';

function SkillCard({ icon: Icon, textId }: TSkillCardProps): ReactElement {
  const { type, colors } = useTheme();
  return (
    <Container>
      <Icon
        width="24px"
        height="24px"
        {...(type === Theme.DARK && { iconColor: colors.primary })}
        color={colors.primaryBackground}
      />
      <TextWrapper>
        <Text textId={textId} size={FontSize.xsmall} />
      </TextWrapper>
    </Container>
  );
}

export default SkillCard;
