import styled from 'styled-components';

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

export const SubTitleText = styled(Text)`
  display: block;
  margin-bottom: 8px;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const DateText = styled(Text)`
  margin-left: 4px;
`;

export const ImageWrapper = styled.div`
  width: 72px;
  height: 72px;
  min-width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
