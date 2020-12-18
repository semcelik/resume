/* eslint-disable  jsx-a11y/control-has-associated-label */
import React, { ReactElement } from 'react';

import Box from 'components/Box';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import Language from './components/Language';
import ProfessionalHistory from './components/ProfessionalHistory';
import Contact from './components/Contact';

function Resume(): ReactElement {
  return (
    <Box
      paddingX="l"
      paddingY="m"
      display="flex"
      flexDirection={{ _: 'column', s: 'row' }}
      flexWrap="wrap">
      <Box flex={1.5} marginRight={{ s: 'l' }}>
        <Header />
        <Contact />
        <AboutMe />
        <Education />
        <Skills />
        <Language />
      </Box>
      <Box flex={2} marginLeft={{ s: 'l' }}>
        <ProfessionalHistory />
      </Box>
    </Box>
  );
}

export default Resume;
