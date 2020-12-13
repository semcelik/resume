import React, { ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { FontSize, FontWeight } from 'constants/props';
import { BaseText } from './Text.style';
import { TTextProps } from './Text.types';

function Text({
  textId,
  values,
  size = FontSize.medium,
  fontWeight = FontWeight.normal,
  color,
  children,
  className,
}: TTextProps): ReactElement {
  return (
    <BaseText size={size} fontWeight={fontWeight} color={color} className={className}>
      <Trans i18nKey={textId} values={values} />
      {children}
    </BaseText>
  );
}

export default Text;
