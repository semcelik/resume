import styled from 'styled-components';

import { TFontWeight } from 'types/theme';
import { TBaseTextProps, TGetFontStyles, TGetFontStylesProp } from './Text.types';
import { FONT_SIZE, FONT_WEIGHT } from './Text.constants';

export const BaseText = styled.div<TBaseTextProps>(({ theme, fontType, size, color, block }) => ({
  color: color || theme.color.primaryText,
  ...getFontStyles({ fontType, size }),
  ...(block && { display: 'block' }),
}));

function getFontStyles({ fontType, size }: TGetFontStylesProp): TGetFontStyles {
  return {
    ...FONT_SIZE[size],
    fontWeight: FONT_WEIGHT[fontType] as TFontWeight,
  };
}
