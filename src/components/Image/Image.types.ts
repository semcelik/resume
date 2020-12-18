import React from 'react';

export type TImageProps = {
  onDarkFilter?: string;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
