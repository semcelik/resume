import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ContentWrapper = styled.div<{ ref: any } & SpaceProps>`
  ${space};
  position: relative;
`;

export const Content = styled.div`
  padding-left: 24px;
`;

export const LineContainer = styled.div<PositionProps>`
  ${position};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

export const LineContent = styled.div<BorderProps & LayoutProps & ColorProps>`
  ${color};
  ${border};
  ${layout};
  border-radius: 50%;
`;

export const CircleLine = styled.div<LayoutProps & ColorProps>`
  ${color};
  ${layout};
  width: 2px;
`;
