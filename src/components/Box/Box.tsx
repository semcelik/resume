import React, { forwardRef, ReactElement, Ref } from 'react';

import { BaseBox } from './Box.style';
import { TBoxProps } from './Box.types';

function Box({ children, color, ...rest }: TBoxProps, ref?: Ref<HTMLDivElement>): ReactElement {
  return (
    <BaseBox ref={ref} {...rest}>
      {children}
    </BaseBox>
  );
}

export default forwardRef(Box);
