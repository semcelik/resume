import styled from 'styled-components';
import { ColorProps, color } from 'styled-system';

import Text from 'components/Text';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const DescriptionText = styled(Text)`
  margin-top: 8px;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const DateText = styled(Text)`
  margin-left: 4px;
`;

export const DateWorkedText = styled(Text)`
  margin-left: 8px;
`;

export const ImageWrapper = styled.div<ColorProps>`
  ${color};
  width: 72px;
  height: 72px;
  min-width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
