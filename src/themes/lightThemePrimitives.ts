import { TThemePrimitives } from 'types/theme';

import COLORS from './common/colors';

const lightThemePrimitives: TThemePrimitives = {
  primary: COLORS.red500,
  primaryBackground: COLORS.gray500,
  primaryText: COLORS.black900,

  // Pill
  pillBackground: COLORS.red500,
  pillText: COLORS.gray500,

  // Timeline
  timelineLine: COLORS.red500,

  // Bar
  barBackground: COLORS.gray600,
  barBackgroundFilled: COLORS.red500,
};

export default lightThemePrimitives;
