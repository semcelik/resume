import { ReactNode, Ref } from 'react';
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  DisplayProps,
  PositionProps,
  BorderProps,
  ColorProps,
} from 'styled-system';

export type TStyledBoxProps = { ref?: Ref<HTMLDivElement> } & SpaceProps &
  LayoutProps &
  FlexboxProps &
  DisplayProps &
  PositionProps &
  BorderProps &
  ColorProps;

export type TBoxProps = {
  children?: ReactNode;
  className?: string;
} & TStyledBoxProps;
