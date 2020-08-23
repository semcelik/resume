import { FC } from 'react';

import { TIconsProps } from 'components/Icons/Icons.type';

export type TSkillCardProps = {
  icon: FC<TIconsProps>;
  textId: string;
};
