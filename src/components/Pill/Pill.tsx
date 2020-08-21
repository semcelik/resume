import React, { ReactElement, memo } from 'react';

import Text from 'components/Text';

import useTheme from 'hooks/useTheme';
import { TPillProps } from './Pill.types';
import BasePill from './Pill.styles';

function Pill({ textId }: TPillProps): ReactElement {
  const { theme } = useTheme();

  return (
    <BasePill>
      <Text textId={textId} size="small" color={theme.color.pillText} />
    </BasePill>
  );
}

export default memo(Pill);
