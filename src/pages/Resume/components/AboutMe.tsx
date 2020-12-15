import React, { ReactElement } from 'react';

import Text from 'components/Text';

import Content from './Content';

function AboutMe(): ReactElement {
  return (
    <Content headerId="page.aboutMe.title">
      <Text textId="page.aboutMe.content" />
    </Content>
  );
}

export default AboutMe;
