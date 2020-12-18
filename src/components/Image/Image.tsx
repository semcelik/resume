import React, { ReactElement } from 'react';

import { useThemeContext } from 'contexts/ThemeProvider';
import Theme from 'constants/theme';
import { TImageProps } from './Image.types';

function Image({ src, alt, onDarkFilter, ...rest }: TImageProps): ReactElement {
  const { theme } = useThemeContext();

  return (
    <img
      src={src}
      alt={alt}
      {...rest}
      style={theme === Theme.DARK ? { filter: onDarkFilter } : {}}
    />
  );
}

export default Image;
