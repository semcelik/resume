import styled from 'styled-components';

import Text from 'components/Text';

export const Container = styled.div`
  margin-bottom: 4px;

  a {
    :not(:hover) path {
      fill: ${({ theme }) => theme.colors.primary};
    }

    :hover {
      > svg {
        filter: none;
      }

      &:last-child div {
        font-weight: normal;
      }
    }
  }
`;

export const StyledA = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  :hover:last-child {
    font-weight: normal;
  }
`;

export const StyledText = styled(Text)`
  margin-left: 8px;
`;
