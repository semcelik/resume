import styled from 'styled-components';
import { space, layout, flexbox, display, position, border, color } from 'styled-system';

import { TStyledBoxProps } from './Box.types';

export const BaseBox = styled.div<TStyledBoxProps>(
  color,
  space,
  layout,
  flexbox,
  display,
  position,
  border
);
