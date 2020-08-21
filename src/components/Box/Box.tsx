import React, { ReactElement } from 'react';
import { omit, pick } from 'lodash/fp';

import BaseBox from './Box.style';
import { TBoxProps } from './Box.types';
import STYLE_PROPS from './Box.constants';

function Box({ as = 'div', children, ...rest }: TBoxProps): ReactElement {
  const styleProps = pick(STYLE_PROPS, rest);
  const componentProps = omit(STYLE_PROPS, rest);

  return (
    <BaseBox as={as} styleProps={styleProps} {...componentProps}>
      {children}
    </BaseBox>
  );
}
export default Box;
