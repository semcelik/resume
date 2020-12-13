import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

export const Container = styled.div<ColorProps>`
  ${color};
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
`;
