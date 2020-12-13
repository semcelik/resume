import { TTheme, TThemePrimitives } from 'types/theme';
import SPACING from './common/spacing';
import lightThemePrimitives from './lightThemePrimitives';
import darkThemePrimitives from './darkThemePrimitives';

function createTheme(themePrimitives: TThemePrimitives): TTheme {
  return {
    colors: themePrimitives,
    spacing: SPACING,
  };
}

const lightTheme = createTheme(lightThemePrimitives);

const darkTheme = createTheme(darkThemePrimitives);

export { lightTheme, darkTheme };
