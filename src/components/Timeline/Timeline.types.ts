import { ReactNode } from 'react';

export type TTimelineProps = {
  children: ReactNode;
  gap: string;
  lineTop?: string;
};

export type TChildWithLineProps = {
  children: ReactNode;
  gap: string;
  isLast: boolean;
  lineTop: string;
  isFirst: boolean;
};

export type TLine = {
  height: number;
  onlyCircle: boolean;
  lineTop: string;
  isFilled: boolean;
};
