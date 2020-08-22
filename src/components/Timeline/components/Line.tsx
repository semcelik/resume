import React, { ReactElement } from 'react';

import Box from 'components/Box';

import useTheme from 'hooks/useTheme';
import { TLine } from '../Timeline.types';
import { LINE } from '../Timeline.constants';

function Line({ height, onlyCircle = false, lineTop, isFilled }: TLine): ReactElement {
  const { theme } = useTheme();

  function getLineSize() {
    const circleHeight = LINE.CIRCLE_SIZE + LINE.BORDER_WIDTH * 2;
    return `${height - circleHeight}px`;
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="absolute"
      top={lineTop}>
      <Box
        width={LINE.CIRCLE_SIZE}
        height={LINE.CIRCLE_SIZE}
        border={`${LINE.BORDER_WIDTH}px solid`}
        borderRadius="50%"
        borderColor={theme.color.timelineLine}
        {...(isFilled && { backgroundColor: theme.color.timelineLine })}
      />
      {!onlyCircle && (
        <Box width="2px" height={getLineSize()} backgroundColor={theme.color.timelineLine} />
      )}
    </Box>
  );
}

export default Line;
