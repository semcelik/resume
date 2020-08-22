import React, { ReactElement } from 'react';

import Box from 'components/Box';

import useOffsetHeight from 'hooks/useOffsetHeight';
import useTheme from 'hooks/useTheme';
import Line from './Line';
import { TChildWithLineProps } from '../Timeline.types';

function ChildWithLine({
  children,
  gap,
  isFirst,
  isLast,
  lineTop,
}: TChildWithLineProps): ReactElement {
  const { theme } = useTheme();
  const [elementRef, offsetHeight] = useOffsetHeight();

  return (
    <Box ref={elementRef} position="relative" {...(!isLast && { paddingBottom: gap })}>
      {offsetHeight > 0 && (
        <Line height={offsetHeight} onlyCircle={isLast} lineTop={lineTop} isFilled={!isFirst} />
      )}
      <Box paddingLeft={theme.spacing.spacing300}>{children}</Box>
    </Box>
  );
}

export default ChildWithLine;
