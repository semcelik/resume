import React, { ReactElement } from 'react';

import useOffsetHeight from 'hooks/useOffsetHeight';
import Line from './Line';
import { TChildWithLineProps } from '../Timeline.types';
import { Content, ContentWrapper } from '../Timeline.style';

function ChildWithLine({
  children,
  gap,
  isFirst,
  isLast,
  lineTop,
}: TChildWithLineProps): ReactElement {
  const [elementRef, offsetHeight] = useOffsetHeight();

  return (
    <ContentWrapper ref={elementRef} {...(!isLast && { paddingBottom: gap })}>
      {offsetHeight > 0 && (
        <Line height={offsetHeight} onlyCircle={isLast} lineTop={lineTop} isFilled={!isFirst} />
      )}
      <Content>{children}</Content>
    </ContentWrapper>
  );
}

export default ChildWithLine;
