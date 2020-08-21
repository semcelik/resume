import { ReactNode } from 'react';

import { TFontWeight, TLineHeight } from 'types/theme';
import { FONT_SIZE, FONT_WEIGHT, TAG } from './Text.constants';

export type TTextProps = {
  textId: string;
  values?: string;
  as?: TAs;
  fontType?: keyof typeof FONT_WEIGHT;
  size?: TSize;
  color?: string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
};

export type TBaseTextProps = {
  as: TAs;
  fontType: TFontType;
  size: TSize;
  color?: string;
  block?: boolean;
};

type TFontType = keyof typeof FONT_WEIGHT;

type TSize = keyof typeof FONT_SIZE;

type TAs = keyof typeof TAG;

export type TGetFontStylesProp = {
  fontType: TFontType;
  size: TSize;
};

export type TGetFontStyles = {
  fontWeight: TFontWeight;
  fontSize: string;
  lineHeight: TLineHeight;
};
