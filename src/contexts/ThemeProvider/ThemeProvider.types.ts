import Theme from 'constants/theme';

export type TThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};
