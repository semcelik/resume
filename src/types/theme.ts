export type TColor = {
  black900: string;
  red500: string;
  gray600: string;
  gray500: string;
  gray400: string;
};

export type TSpacing = {
  spacing50: string;
  spacing100: string;
  spacing200: string;
  spacing300: string;
  spacing400: string;
  spacing500: string;
  spacing600: string;
  spacing700: string;
  spacing800: string;
};

export type TThemePrimitives = {
  primary: string;
  primaryBackground: string;
  primaryText: string;
  pillBackground: string;
  pillText: string;
  timelineLine: string;
};

export type TFontWeight = 'bold' | 'normal' | 'lighter' | number;

export type TLineHeight = string | number;

export type TFontValue = {
  fontSize: string;
  fontWeight: TFontWeight;
  lineHeight: TLineHeight;
};

export type TTypography = {
  font100: TFontValue;
  font200: TFontValue;
  font300: TFontValue;
  font400: TFontValue;
  font500: TFontValue;
};
