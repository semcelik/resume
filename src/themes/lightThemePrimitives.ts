import { TThemePrimitives } from 'types/theme';

import color from './color';

const lightThemePrimitives: TThemePrimitives = {
  primary: color.red500,
  primaryBackground: color.gray500,
  primaryText: color.black900,

  // Pill
  pillBackground: color.red500,
  pillText: color.gray500,

  // Timeline
  timelineLine: color.red500,

  // Bar
  barBackground: color.gray600,
  barBackgroundFilled: color.red500,
};

export default lightThemePrimitives;
