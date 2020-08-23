import { ElementType, ReactNode } from 'react';

export type TBoxProps = TStyleProps & {
  as?: ElementType;
  children?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [rest: string]: any;
};

export type TBaseBoxProps = {
  as: ElementType;
  styleProps: TStyleProps;
};

export type TStyleProps = {
  backgroundColor?: string;

  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;

  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginHorizontal?: string;
  marginVertical?: string;

  display?: TDisplay;
  flexDirection?: TFlexDirection;
  flexWrap?: TFlexWrap;
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

  border?: string;
  borderColor?: string;
  borderRadius?: string;
};

type TDisplay = 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'none' | 'initial' | 'inherit,';

type TFlexDirection = 'row' | 'column';

type TFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

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
