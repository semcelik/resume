import { TI18NId } from 'types/common';

export type TEducationCardProps = {
  schoolId: TI18NId;
  imageSrc?: string;
  year: string;
  gpa?: number;
  majorId?: TI18NId;
};
