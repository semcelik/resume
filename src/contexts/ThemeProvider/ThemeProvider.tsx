import React, { createContext, ReactElement, useContext, useState } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

import THEME from 'constants/theme';
import { darkTheme, lightTheme } from 'themes/theme';
import { TChildrenOnly } from 'types/common';
import { INITIAL_STATE } from './ThemeProvider.constants';
import { TThemeContext } from './ThemeProvider.types';
import GlobalThemeStyle from './ThemeProvider.style';

const themeContext = createContext<TThemeContext>(INITIAL_STATE);

function ThemeProvider({ children }: TChildrenOnly): ReactElement {
  const [selectedTheme, setSelectedTheme] = useState(INITIAL_STATE.theme);

  function getTheme() {
    return selectedTheme === THEME.LIGHT ? lightTheme : darkTheme;
  }

  function toggleTheme() {
    setSelectedTheme((prevTheme) => (prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));
  }

  const value = {
    theme: selectedTheme,
    toggleTheme,
  };

  return (
    <themeContext.Provider value={value}>
      <BaseThemeProvider theme={getTheme()}>
        <GlobalThemeStyle />
        {children}
      </BaseThemeProvider>
    </themeContext.Provider>
  );
}

export default ThemeProvider;

export const useThemeContext = (): TThemeContext => useContext(themeContext);
