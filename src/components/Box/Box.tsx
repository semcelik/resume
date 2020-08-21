import React, { ReactElement } from 'react';

import BaseBox from './Box.style';
import { TBoxProps } from './Box.types';

function Box({ as = 'div', children, ...rest }: TBoxProps): ReactElement {
  return (
    <BaseBox as={as} styleProps={rest}>
      {children}
    </BaseBox>
  );
}
export default Box;
