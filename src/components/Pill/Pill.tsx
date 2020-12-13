import React, { memo, ReactElement } from 'react';

import Text from 'components/Text';

import { FontSize } from 'constants/props';
import { TPillProps } from './Pill.types';
import { Container } from './Pill.style';

function Pill({ textId }: TPillProps): ReactElement {
  return (
    <Container backgroundColor="pillBackground">
      <Text textId={textId} size={FontSize.small} color="pillText" />
    </Container>
  );
}

export default memo(Pill);
