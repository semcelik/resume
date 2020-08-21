import React from 'react';
import { ThemeProvider } from 'styled-components';

import useTheme from 'hooks/useTheme';
import GlobalAppStyle from 'App.style';
import 'i18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];

function Theme({ children }) {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalAppStyle />
      {children}
    </ThemeProvider>
  );
}
