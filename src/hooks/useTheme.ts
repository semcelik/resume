import { useMemo, useState } from 'react';

import THEME, { THEME_COLOR_MAP } from 'constants/theme';
import spacing from 'themes/spacing';
import typography from 'themes/typography';
import { TSpacing, TThemePrimitives, TTypography } from 'types/theme';

type TUseTheme = {
  theme: TTheme;
  toggleTheme: () => void;
};

type TTheme = {
  color: TThemePrimitives;
  spacing: TSpacing;
  typography: TTypography;
};

type TGetThemeProps = keyof typeof THEME_COLOR_MAP;

function useTheme(): TUseTheme {
  const [selectedThemeType, setSelectedThemeType] = useState<TGetThemeProps>(THEME.LIGHT);
  const theme = useMemo(() => getTheme(selectedThemeType), [selectedThemeType]);

  function getTheme(themeType: TGetThemeProps): TTheme {
    return {
      color: THEME_COLOR_MAP[themeType],
      spacing,
      typography,
    };
  }

  function toggleTheme() {
    if (selectedThemeType === THEME.LIGHT) {
      setSelectedThemeType(THEME.DARK);
    } else if (selectedThemeType === THEME.DARK) {
      setSelectedThemeType(THEME.LIGHT);
    }
  }

  return { theme, toggleTheme };
}

export default useTheme;
