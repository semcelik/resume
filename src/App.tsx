import React, { ReactElement } from 'react';

import Box from 'components/Box';
import Text from 'components/Text';

import ThemeProvider from 'contexts/ThemeProvider';
import { FontSize } from './components/Text/Text.constants';

function App(): ReactElement {
  return (
    <ThemeProvider>
      <Box>
        <Text textId="test.sample" size={FontSize.small} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
