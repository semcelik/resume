import { TThemePrimitives } from 'types/theme';

import COLORS from './common/colors';

const darkThemePrimitives: TThemePrimitives = {
  primary: COLORS.red500,
  primaryBackground: COLORS.black900,
  primaryText: COLORS.gray400,

  // Pill
  pillBackground: COLORS.red500,
  pillText: COLORS.black900,

  // Timeline
  timelineLine: COLORS.red500,

  // Bar
  barBackground: COLORS.gray600,
  barBackgroundFilled: COLORS.red500,
};

export default darkThemePrimitives;
