import React, { ReactElement } from 'react';

import Box from 'components/Box';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import Language from './components/Language';

function Resume(): ReactElement {
  return (
    <Box paddingX="l" paddingY="m" display="flex" flexDirection="row">
      <Box flex={1.5} marginRight="l">
        <Header />
        <AboutMe />
        <Education />
        <Skills />
        <Language />
      </Box>
      <Box flex={2} marginLeft="l">
        TODO
      </Box>
    </Box>
  );
}

export default Resume;
