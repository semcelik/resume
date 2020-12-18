import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

import { getOnDarkBoxShadow } from 'helpers/style';

export const Container = styled.div<ColorProps>`
  ${color};
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 8px;
  white-space: nowrap;
  ${getOnDarkBoxShadow};
`;
