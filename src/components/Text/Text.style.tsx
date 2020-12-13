import styled from 'styled-components';
import { variant, color } from 'styled-system';

import { FontSize, FontWeight } from 'constants/props';
import { TBaseTextProps } from './Text.types';

const sizeVariant = variant({
  prop: 'size',
  variants: {
    [FontSize.xsmall]: { fontSize: '10px', lineHeight: '15px' },
    [FontSize.small]: { fontSize: '12px', lineHeight: '18px' },
    [FontSize.medium]: { fontSize: '14px', lineHeight: '21px' },
    [FontSize.large]: { fontSize: '18px', lineHeight: '27px' },
    [FontSize.xlarge]: { fontSize: '28px', lineHeight: '42px' },
  },
});

const fontWeightVariant = variant({
  prop: 'fontWeight',
  variants: {
    [FontWeight.light]: { fontWeight: 200 },
    [FontWeight.normal]: { fontWeight: 'normal' },
    [FontWeight.bold]: { fontWeight: 'bold' },
  },
});

export const BaseText = styled.div<TBaseTextProps>`
  ${color};
  ${sizeVariant};
  ${fontWeightVariant};
  // TODO: (semih) add these props
  // ...(block && { display: 'block' }),
  // ...(center && { textAlign: 'center' }),
`;
