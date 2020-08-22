import React, { forwardRef, ReactElement, Ref } from 'react';
import { omit, pick } from 'lodash/fp';

import { BaseBox } from './Box.style';
import { TBoxProps } from './Box.types';
import { STYLE_PROPS } from './Box.constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Box({ as = 'div', children, ...rest }: TBoxProps, ref: Ref<any>): ReactElement {
  const styleProps = pick(STYLE_PROPS, rest);
  const componentProps = omit(STYLE_PROPS, rest);

  return (
    <BaseBox as={as} ref={ref} styleProps={styleProps} {...componentProps}>
      {children}
    </BaseBox>
  );
}
export default forwardRef(Box);
