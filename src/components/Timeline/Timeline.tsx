import React, { ReactElement, Children } from 'react';

import Box from 'components/Box';

import { TTimelineProps } from './Timeline.types';
import ChildWithLine from './components/ChildWithLine';

function Timeline({ children, gap, lineTop = '0' }: TTimelineProps): ReactElement {
  const itemCount = Children.count(children);

  return (
    <Box display="flex" flexDirection="column">
      {Children.map(children, (child, index) => {
        const isLast = index + 1 === itemCount;
        return (
          <ChildWithLine gap={gap} isFirst={index === 0} isLast={isLast} lineTop={lineTop}>
            {child}
          </ChildWithLine>
        );
      })}
    </Box>
  );
}

export default Timeline;
