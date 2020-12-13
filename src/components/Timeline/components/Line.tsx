import React, { ReactElement } from 'react';

import { TLine } from '../Timeline.types';
import { LINE } from '../Timeline.constants';
import { CircleLine, LineContainer, LineContent } from '../Timeline.style';

function Line({ height, onlyCircle = false, lineTop, isFilled }: TLine): ReactElement {
  function getLineSize() {
    const circleHeight = LINE.CIRCLE_SIZE + LINE.BORDER_WIDTH * 2;
    return `${height - circleHeight}px`;
  }

  return (
    <LineContainer top={lineTop}>
      <LineContent
        width={LINE.CIRCLE_SIZE}
        height={LINE.CIRCLE_SIZE}
        border={`${LINE.BORDER_WIDTH}px solid`}
        borderColor="timelineLine"
        {...(isFilled && { backgroundColor: 'timelineLine' })}
      />
      {!onlyCircle && <CircleLine height={getLineSize()} backgroundColor="timelineLine" />}
    </LineContainer>
  );
}

export default Line;
