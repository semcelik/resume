import React from 'react';
import ThemeProvider from '../src/contexts/ThemeProvider';
import 'i18n';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
