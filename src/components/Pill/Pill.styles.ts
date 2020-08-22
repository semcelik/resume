import styled from 'styled-components';

export const BasePill = styled.div(({ theme }) => ({
  display: 'inline',
  padding: `${theme.spacing.spacing50} ${theme.spacing.spacing100}`,
  backgroundColor: theme.color.pillBackground,
  borderRadius: '8px',
}));
