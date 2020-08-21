import { ElementType, ReactNode } from 'react';

export type TBoxProps = TStyleProps & {
  as?: ElementType;
  children?: ReactNode;
};

export type TBaseBoxProps = {
  as: ElementType;
  styleProps: TStyleProps;
};

export type TStyleProps = {
  backgroundColor?: string;

  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;

  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginHorizontal?: string;
  marginVertical?: string;

  display?: TDisplay;
  flexDirection?: TFlexDirection;
  alignItems?: TAlignItems;
  justifyContent?: TJustifyContent;
  alignSelf?: TAlignSelf;

  position?: TPosition;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
};

type TDisplay = 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'none' | 'initial' | 'inherit,';

type TFlexDirection = 'row' | 'column';

type TAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

type TJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'initial'
  | 'inherit';

type TAlignSelf =
  | 'auto'
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

type TPosition = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';
