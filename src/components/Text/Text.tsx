import React, { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { TTextProps } from './Text.types';
import BaseText from './Text.style';

function Text({
  textId,
  values,
  as = 'span',
  fontType = 'normal',
  size = 'medium',
  color,
  children,
}: TTextProps): ReactElement {
  return (
    <BaseText as={as} fontType={fontType} size={size} color={color}>
      {textId && <Trans i18nKey={textId} values={values} />}
      {children}
    </BaseText>
  );
}

export default Text;
