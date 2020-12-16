import React, { ReactElement } from 'react';

import JobCard from 'components/JobCard';
import Timeline from 'components/Timeline';

import Content from './Content';
import { PROFESSIONAL_HISTORY_CONTENTS } from '../Resume.constants';

function ProfessionalHistory(): ReactElement {
  return (
    <Content headerId="pages.professionalHistory.title">
      <Timeline gap="24px" lineTop="8px">
        {PROFESSIONAL_HISTORY_CONTENTS.map(
          ({ titleId, subTitleId, imageSrc, descriptionId, startedAt, finishedAt }) => (
            <JobCard
              key={titleId}
              titleId={titleId}
              subTitleId={subTitleId}
              imageSrc={imageSrc}
              descriptionId={descriptionId}
              startedAt={startedAt}
              finishedAt={finishedAt}
            />
          )
        )}
      </Timeline>
    </Content>
  );
}

export default ProfessionalHistory;
