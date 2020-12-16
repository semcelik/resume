import React, { ReactElement } from 'react';

import SkillCard from 'components/SkillCard';
import Box from 'components/Box';
import Text from 'components/Text';
import Pill from 'components/Pill';

import { FontWeight } from 'constants/props';
import Content from './Content';
import { SKILLS_CONTENT } from '../Resume.constants';

function Skills(): ReactElement {
  return (
    <Content headerId="page.skills.title">
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {SKILLS_CONTENT.TOP_SKILLS.map(({ icon, textId }) => (
          <SkillCard key={textId} icon={icon} textId={textId} />
        ))}
      </Box>
      <Box marginTop="m">
        <Text textId="page.skills.alsoHaveTitle" fontWeight={FontWeight.light} />
        <Box marginTop="s" display="flex" flexWrap="wrap" justifyContent="center">
          {SKILLS_CONTENT.ALSO_HAVE.map(({ textId }) => (
            <Pill key={textId} textId={textId} />
          ))}
        </Box>
      </Box>
    </Content>
  );
}

export default Skills;
