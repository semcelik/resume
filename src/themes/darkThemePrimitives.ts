import { TThemePrimitives } from 'types/theme';

import COLORS from './common/colors';

const darkThemePrimitives: TThemePrimitives = {
  primary: COLORS.green500,
  primaryBackground: COLORS.black800,
  primaryText: COLORS.gray400,

  // Pill
  pillBackground: COLORS.green500,
  pillText: COLORS.black800,

  // Timeline
  timelineLine: COLORS.green500,

  // Bar
  barBackground: COLORS.gray400,
  barBackgroundFilled: COLORS.green500,

  // JobCard
  jobCardImageBackground: COLORS.gray400,
};

export default darkThemePrimitives;
