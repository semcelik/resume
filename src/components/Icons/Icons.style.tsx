import React from 'react';
import styled from 'styled-components';

import Theme from 'constants/theme';

export const Svg = styled.svg<React.SVGProps<SVGSVGElement>>`
  ${({ theme: { type, colors } }) =>
    type === Theme.DARK && `filter: drop-shadow(0px 0px 5px ${colors.primary});`}
`;
