import React, { memo, ReactElement } from 'react';

import Text from 'components/Text';

import { TPillProps } from './Pill.types';
import { Container } from './Pill.style';
import { FontSize } from '../Text/Text.constants';

function Pill({ textId }: TPillProps): ReactElement {
  return (
    <Container backgroundColor="pillBackground">
      <Text textId={textId} size={FontSize.small} color="pillText" />
    </Container>
  );
}

export default memo(Pill);
