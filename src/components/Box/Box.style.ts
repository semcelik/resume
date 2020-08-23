import styled from 'styled-components';

import { TBaseBoxProps } from './Box.types';

export const BaseBox = styled.div<TBaseBoxProps>(({ styleProps }) => {
  const {
    paddingHorizontal,
    paddingVertical,
    marginHorizontal,
    marginVertical,
    ...restStyleProps
  } = styleProps;
  return {
    ...restStyleProps,
    ...(paddingHorizontal && { paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal }),
    ...(paddingVertical && { paddingTop: paddingVertical, paddingBottom: paddingVertical }),
    ...(marginHorizontal && { marginLeft: marginHorizontal, marginRight: marginHorizontal }),
    ...(marginVertical && { marginTop: marginVertical, marginBottom: marginVertical }),
  };
});
