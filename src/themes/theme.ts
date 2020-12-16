import { TTheme, TThemePrimitives } from 'types/theme';
import SPACES from './common/spaces';
import BREAKPOINTS from './common/breakpoints';
import lightThemePrimitives from './lightThemePrimitives';
import darkThemePrimitives from './darkThemePrimitives';

function createTheme(themePrimitives: TThemePrimitives): TTheme {
  return {
    colors: themePrimitives,
    space: SPACES,
    breakpoints: BREAKPOINTS,
  };
}

const lightTheme = createTheme(lightThemePrimitives);

const darkTheme = createTheme(darkThemePrimitives);

export { lightTheme, darkTheme };
