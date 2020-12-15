import { GraphqlIcon, JestIcon, ReactIcon, ReduxIcon, TypeScriptIcon } from 'components/Icons';
import { TBarProps } from 'components/Bar';
import { TEducationCardProps } from 'components/EducationCard';
import { TSkillCardProps } from 'components/SkillCard';
import { TPillProps } from 'components/Pill';

import IMAGES from 'constants/images';

export const EDUCATION_CONTENTS: TEducationCardProps[] = [
  {
    schoolId: 'page.education.iu.school',
    imageSrc: IMAGES.iuImage,
    year: '2012-2017',
    gpa: 3.12,
    majorId: 'page.education.iu.major',
  },
  {
    schoolId: 'page.education.yiaaol.school',
    year: '2012-2017',
  },
];

export const SKILLS_CONTENT: { TOP_SKILLS: TSkillCardProps[]; ALSO_HAVE: TPillProps[] } = {
  TOP_SKILLS: [
    {
      icon: TypeScriptIcon,
      textId: 'page.skills.typescript',
    },
    {
      icon: ReactIcon,
      textId: 'page.skills.react',
    },
    {
      icon: ReactIcon,
      textId: 'page.skills.reactNative',
    },
    {
      icon: ReduxIcon,
      textId: 'page.skills.redux',
    },
    {
      icon: JestIcon,
      textId: 'page.skills.jest',
    },
    {
      icon: GraphqlIcon,
      textId: 'page.skills.graphql',
    },
    // TODO: (semih) add one more main skill
  ],
  ALSO_HAVE: [
    { textId: 'page.skills.reduxSaga' },
    { textId: 'page.skills.testingLibrary' },
    { textId: 'page.skills.styledComponents' },
    { textId: 'page.skills.webpack' },
    { textId: 'page.skills.sass' },
    { textId: 'page.skills.java' },
    { textId: 'page.skills.springFramework' },
    { textId: 'page.skills.appium' },
  ],
};

export const LANGUAGE_CONTENTS: TBarProps[] = [
  {
    titleId: 'labels.turkish',
    descriptionId: 'labels.native',
    percentage: 100,
  },
  {
    titleId: 'labels.english',
    descriptionId: 'labels.intermediate',
    percentage: 85,
  },
];
