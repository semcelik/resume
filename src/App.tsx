import React, { ReactElement } from 'react';

import Box from 'components/Box';

import ThemeProvider from 'contexts/ThemeProvider';

import Resume from './pages/Resume';

function App(): ReactElement {
  return (
    <ThemeProvider>
      <Box maxWidth={960} margin="0px auto">
        <Resume />
      </Box>
    </ThemeProvider>
  );
}

export default App;
