import Theme from 'constants/theme';

export type TTheme = {
  type: Theme;
  colors: TThemePrimitives;
  space: TSpaces;
  breakpoints: TBreakpoints;
};

export type TSpaces = {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

export type TColors = {
  black900: string;
  black800: string;
  red500: string;
  gray600: string;
  gray500: string;
  gray400: string;
  green500: string;
  transparent: string;
};

export type TThemePrimitives = {
  primary: string;
  primaryBackground: string;
  primaryText: string;
  pillBackground: string;
  pillText: string;
  timelineLine: string;
  barBackground: string;
  barBackgroundFilled: string;
  jobCardImageBackground: string;
};

export type TBreakpoints = string[] & {
  xs?: string;
  s?: string;
  m?: string;
  l?: string;
  xl?: string;
};
