import React, { ReactElement } from 'react';

import Bar from 'components/Bar';

import Content from './Content';
import { LANGUAGE_CONTENTS } from '../Resume.constants';

function Language(): ReactElement {
  return (
    <Content headerId="page.language.title">
      {LANGUAGE_CONTENTS.map(({ titleId, descriptionId, percentage }) => (
        <Bar
          key={titleId}
          titleId={titleId}
          descriptionId={descriptionId}
          percentage={percentage}
        />
      ))}
    </Content>
  );
}

export default Language;
