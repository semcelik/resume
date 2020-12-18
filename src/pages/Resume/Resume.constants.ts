import {
  GitHubIcon,
  GmailIcon,
  GraphqlIcon,
  JestIcon,
  LinkedInIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TypeScriptIcon,
} from 'components/Icons';
import { TBarProps } from 'components/Bar';
import { TEducationCardProps } from 'components/EducationCard';
import { TSkillCardProps } from 'components/SkillCard';
import { TPillProps } from 'components/Pill';
import { TJobCardProps } from 'components/JobCard';
import { TContactCardProps } from 'components/ContactCard';

import IMAGES from 'constants/images';
import { HrefType } from 'constants/common';

export const CONTACT_CONTENTS: TContactCardProps[] = [
  {
    icon: GitHubIcon,
    type: HrefType.https,
    link: 'github.com/semcelik',
  },
  {
    icon: LinkedInIcon,
    type: HrefType.https,
    link: 'linkedin.com/in/semcelik',
  },
  {
    icon: GmailIcon,
    type: HrefType.mail,
    link: 's.celikce@gmail.com',
  },
];

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
    {
      icon: SassIcon,
      textId: 'page.skills.sass',
    },
  ],
  ALSO_HAVE: [
    { textId: 'page.skills.reduxSaga' },
    { textId: 'page.skills.testingLibrary' },
    { textId: 'page.skills.styledComponents' },
    { textId: 'page.skills.webpack' },
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

export const PROFESSIONAL_HISTORY_CONTENTS: TJobCardProps[] = [
  {
    titleId: 'labels.frontendDeveloper',
    subTitleId: 'labels.wamo',
    imageSrc: IMAGES.wamoImage,
    descriptionId: 'pages.professionalHistory.wamo.descriptionId',
    startedAt: '2020-11',
  },
  {
    titleId: 'labels.frontendDeveloper',
    subTitleId: 'labels.iyzico',
    imageSrc: IMAGES.iyzicoImage,
    descriptionId: 'pages.professionalHistory.iyzico.descriptionId',
    startedAt: '2019-09',
    finishedAt: '2020-11',
  },
  {
    titleId: 'labels.frontendDeveloper',
    subTitleId: 'labels.huawei',
    imageSrc: IMAGES.huaweiImage,
    descriptionId: 'pages.professionalHistory.huawei.descriptionId',
    startedAt: '2018-03',
    finishedAt: '2019-09',
    onDarkFilter: 'contrast(0)',
  },
  {
    titleId: 'labels.frontendDeveloper',
    subTitleId: 'labels.startupHeroes',
    imageSrc: IMAGES.startupheroesImage,
    descriptionId: 'pages.professionalHistory.startupHeroes.descriptionId',
    startedAt: '2017-07',
    finishedAt: '2018-03',
  },
  {
    titleId: 'labels.frontendDeveloper',
    subTitleId: 'labels.migros',
    imageSrc: IMAGES.migrosImage,
    descriptionId: 'pages.professionalHistory.migros.descriptionId',
    startedAt: '2017-01',
    finishedAt: '2017-07',
  },
  {
    titleId: 'labels.intern',
    subTitleId: 'labels.grimor',
    imageSrc: IMAGES.grimorImage,
    descriptionId: 'pages.professionalHistory.grimor.descriptionId',
    startedAt: '2016-07',
    finishedAt: '2016-09',
  },
  {
    titleId: 'labels.intern',
    subTitleId: 'labels.stajOkulu',
    imageSrc: IMAGES.stajokuluImage,
    descriptionId: 'pages.professionalHistory.stajOkulu.descriptionId',
    startedAt: '2015-07',
    finishedAt: '2015-09',
    onDarkFilter: 'contrast(0)',
  },
];
