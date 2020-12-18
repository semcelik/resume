import { FC } from 'react';

import { TIconsProps } from 'components/Icons';

import { HrefType } from 'constants/common';

export type TContactCardProps = {
  icon: FC<TIconsProps>;
  link: string;
  type: HrefType;
};
