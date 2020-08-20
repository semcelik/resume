import { TThemePrimitives } from 'types/theme';
import lightThemePrimitives from 'themes/lightThemePrimitives';
import darkThemePrimitives from 'themes/darkThemePrimitives';

const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export const THEME_COLOR_MAP: Record<string, TThemePrimitives> = {
  [THEME.LIGHT]: lightThemePrimitives,
  [THEME.DARK]: darkThemePrimitives,
};

export default THEME;
