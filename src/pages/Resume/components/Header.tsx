import React, { ReactElement } from 'react';

import Box from 'components/Box';
import Text from 'components/Text';

import { FontSize, FontWeight } from 'constants/props';
import IMAGES from 'constants/images';
import Content from './Content';

function Header(): ReactElement {
  return (
    <Content display="flex">
      <Box marginRight="l" display="flex">
        <img width={128} height="auto" src={IMAGES.profileImage} alt="Profile" />
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
