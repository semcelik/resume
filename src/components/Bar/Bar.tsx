import React, { ReactElement } from 'react';

import Text from 'components/Text';

import { TBarProps } from './Bar.types';
import { BarContent, BarFilled, BarWrapper, Container, Header } from './Bar.style';
import { FontSize } from '../Text/Text.constants';

function Bar({ titleId, percentage, descriptionId }: TBarProps): ReactElement {
  return (
    <Container>
      <Header>
        <Text textId={titleId} size={FontSize.large} />
        <Text textId={descriptionId} />
      </Header>
      <BarWrapper>
        <BarFilled backgroundColor="barBackgroundFilled" percentage={percentage} />
        <BarContent backgroundColor="barBackground" />
      </BarWrapper>
    </Container>
  );
}

export default Bar;
