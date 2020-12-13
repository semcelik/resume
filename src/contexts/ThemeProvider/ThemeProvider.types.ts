import THEME from 'constants/theme';

export type TThemeContext = {
  theme: THEME;
  toggleTheme: () => void;
};
