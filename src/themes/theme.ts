import { TTheme, TThemePrimitives } from 'types/theme';
import Theme from 'constants/theme';
import SPACES from './common/spaces';
import BREAKPOINTS from './common/breakpoints';
import lightThemePrimitives from './lightThemePrimitives';
import darkThemePrimitives from './darkThemePrimitives';

function createTheme(type: Theme, themePrimitives: TThemePrimitives): TTheme {
  return {
    type,
    colors: themePrimitives,
    space: SPACES,
    breakpoints: BREAKPOINTS,
  };
}

const lightTheme = createTheme(Theme.LIGHT, lightThemePrimitives);

const darkTheme = createTheme(Theme.DARK, darkThemePrimitives);

export { lightTheme, darkTheme };
