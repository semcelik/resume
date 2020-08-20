import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import useTheme from 'hooks/useTheme';
import GlobalAppStyle from './App.style';

function App(): ReactElement {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalAppStyle />
      <div style={{ backgroundColor: 'red' }}>test</div>
    </ThemeProvider>
  );
}

export default App;
