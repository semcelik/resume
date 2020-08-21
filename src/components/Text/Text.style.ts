import styled from 'styled-components';

import { TBaseTextProps, TGetFontStyles, TGetFontStylesProp } from './Text.types';
import { FONT_SIZE, FONT_WEIGHT } from './Text.constants';

const BaseText = styled.div<TBaseTextProps>(({ theme, fontType, size, color }) => ({
  color: color || theme.color.primaryText,
  ...getFontStyles({ fontType, size }),
}));

function getFontStyles({ fontType, size }: TGetFontStylesProp): TGetFontStyles {
  return {
    ...FONT_SIZE[size],
    fontWeight: FONT_WEIGHT[fontType],
  };
}

export default BaseText;
