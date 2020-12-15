import { FC } from 'react';

import { TIconsProps } from 'components/Icons';

import { TI18NId } from 'types/common';

export type TSkillCardProps = {
  icon: FC<TIconsProps>;
  textId: TI18NId;
};
