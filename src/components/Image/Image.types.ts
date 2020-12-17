import React from 'react';

export type TImageProps = {
  invertOnDark?: boolean;
  onDarkFilter?: string;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
