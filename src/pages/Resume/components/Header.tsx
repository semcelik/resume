import React, { ReactElement } from 'react';

import Box from 'components/Box';
import Text from 'components/Text';
import Image from 'components/Image';

import { useThemeContext } from 'contexts/ThemeProvider';
import { FontSize, FontWeight } from 'constants/props';
import IMAGES from 'constants/images';
import Content from './Content';

// TODO: (semih) move toggle theme button
function Header(): ReactElement {
  const { toggleTheme } = useThemeContext();
  return (
    <Content display="flex">
      <Box marginRight="l" display="flex">
        <Image
          onDarkFilter="grayscale(0.7)"
          width={128}
          height={150}
          src={IMAGES.profileImage}
          alt="Profile"
          onClick={toggleTheme}
        />
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="column" paddingTop="l">
        <Text
          textId="page.header.name"
          size={FontSize.xlarge}
          fontWeight={FontWeight.bold}
          color="primary"
        />
        <Text textId="page.header.jobTitle" fontWeight={FontWeight.light} />
      </Box>
    </Content>
  );
}

export default Header;
