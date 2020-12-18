import { TI18NId } from 'types/common';

export type TJobCardProps = {
  titleId: TI18NId;
  subTitleId: TI18NId;
  descriptionId: TI18NId;
  startedAt: string;
  finishedAt?: string;
  imageSrc?: string;
  onDarkFilter?: string;
};
