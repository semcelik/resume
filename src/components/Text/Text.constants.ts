import { TFontValue, TFontWeight } from 'types/theme';
import typography from 'themes/typography';

export const FONT_WEIGHT: { [key: string]: TFontWeight } = {
  light: 200,
  normal: 'normal',
  bold: 'bold',
};

export const FONT_SIZE: { [key: string]: TFontValue } = {
  xsmall: typography.font100,
  small: typography.font200,
  medium: typography.font300,
  large: typography.font400,
  xlarge: typography.font500,
};

export const TAG = {
  p: 'p',
  span: 'span',
  label: 'label',
  div: 'div',
};
