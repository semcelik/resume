import { TThemePrimitives } from 'types/theme';

import color from './color';

const darkThemePrimitives: TThemePrimitives = {
  primary: color.red500,
  primaryBackground: color.black900,
  primaryText: color.gray400,

  // Pill
  pillBackground: color.red500,
  pillText: color.black900,

  // Timeline
  timelineLine: color.red500,

  // Bar
  barBackground: color.gray600,
  barBackgroundFilled: color.red500,
};

export default darkThemePrimitives;
