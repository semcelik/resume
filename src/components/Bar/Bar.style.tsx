import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';

export const Container = styled.div`
  margin-bottom: 24px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BarWrapper = styled.div`
  height: 5px;
  position: relative;
`;

export const BarFilled = styled.div<ColorProps & { percentage: number }>`
  ${color};
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  position: absolute;
  border-radius: 2px;
  left: 0;
`;

export const BarContent = styled.div<ColorProps>`
  ${color};
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;
