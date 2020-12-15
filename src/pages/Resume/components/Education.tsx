import React, { ReactElement } from 'react';

import EducationCard from 'components/EducationCard';

import Content from './Content';
import { EDUCATION_CONTENTS } from '../Resume.constants';

function Education(): ReactElement {
  return (
    <Content headerId="page.education.title">
      {EDUCATION_CONTENTS.map(({ schoolId, imageSrc, year, gpa, majorId }) => (
        <EducationCard
          key={schoolId}
          imageSrc={imageSrc}
          schoolId={schoolId}
          year={year}
          gpa={gpa}
          majorId={majorId}
        />
      ))}
    </Content>
  );
}

export default Education;
