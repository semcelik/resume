import React, { ReactElement } from 'react';

import Box from 'components/Box';
import Text from 'components/Text';

import { FontSize } from 'constants/props';
import { TContentProps } from '../Resume.types';

function Content({ headerId, children, ...rest }: TContentProps): ReactElement {
  return (
    <Box marginBottom="l" {...rest}>
      {headerId && (
        <Box marginBottom="s">
          <Text textId={headerId} size={FontSize.xlarge} />
        </Box>
      )}
      {children}
    </Box>
  );
}

export default Content;
