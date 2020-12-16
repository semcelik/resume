import styled from 'styled-components';

import Text from 'components/Text';

export const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ImageWrapper = styled.div`
  min-width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex-grow: 1;
  margin-left: 16px;
  min-width: 200px;
  max-width: 300px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MajorText = styled(Text)`
  margin-top: 8px;
`;
