/* eslint-disable  jsx-a11y/control-has-associated-label */
import React, { ReactElement } from 'react';

import Box from 'components/Box';

import { useThemeContext } from 'contexts/ThemeProvider';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Header from './components/Header';
import Skills from './components/Skills';
import Language from './components/Language';
import ProfessionalHistory from './components/ProfessionalHistory';

// TODO: (semih) move toggle theme button
function Resume(): ReactElement {
  const { toggleTheme } = useThemeContext();

  function onThemeChange(): void {
    toggleTheme();
  }

  return (
    <Box
      paddingX="l"
      paddingY="m"
      display="flex"
      flexDirection={{ _: 'column', s: 'row' }}
      flexWrap="wrap">
      <button style={{ height: 10, width: 10 }} id="button" onClick={onThemeChange} type="button" />
      <Box flex={1.5} marginRight={{ s: 'l' }}>
        <Header />
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
