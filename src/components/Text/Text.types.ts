import { ReactNode } from 'react';
import { ColorProps } from 'styled-system';

import { FontSize, FontWeight } from 'constants/props';
import { TI18NId } from 'types/common';

export type TTextProps = {
  size?: FontSize;
  fontWeight?: FontWeight;
  color?: string;
  textId?: TI18NId;
  values?: Record<string, string>;
  className?: string;
  children?: ReactNode;
};

export type TBaseTextProps = {
  size: FontSize;
  fontWeight: FontWeight;
} & ColorProps;
