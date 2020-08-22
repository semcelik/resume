import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import Box from 'components/Box';

import useTheme from 'hooks/useTheme';
import GlobalAppStyle from './App.style';

function App(): ReactElement {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalAppStyle />
      <Box
        minHeight="100vh"
        padding="32px"
        backgroundColor={theme.color.primaryBackground}
        display="flex"
        alignItems="center"
        justifyContent="center">
        test
      </Box>
    </ThemeProvider>
  );
}

export default App;
