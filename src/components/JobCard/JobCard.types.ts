import { TI18NId } from 'types/common';

export type TJobCardProps = {
  companyId: TI18NId;
  jobTitleId: TI18NId;
  descriptionId: TI18NId;
  startedAt: string;
  finishedAt?: string;
  imageSrc?: string;
  onDarkFilter?: string;
};
