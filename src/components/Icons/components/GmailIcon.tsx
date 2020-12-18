import React, { ReactElement } from 'react';

import { TIconsProps } from '../Icons.types';
import { Svg } from '../Icons.style';

function GmailIcon({ iconColor, ...rest }: TIconsProps): ReactElement {
  return (
    <Svg width={88} height={66} viewBox="0 0 88 66" fill="none" {...rest}>
      <g clipPath="url(#prefix__clip0)">
        <path d="M6 66h14V32L0 17v43c0 3.32 2.69 6 6 6z" fill={iconColor || '#4285F4'} />
        <path d="M68 66h14c3.32 0 6-2.69 6-6V17L68 32" fill={iconColor || '#34A853'} />
        <path d="M68 6v26l20-15V9c0-7.42-8.47-11.65-14.4-7.2" fill={iconColor || '#FBBC04'} />
        <path d="M20 32V6l24 18L68 6v26L44 50" fill={iconColor || '#EA4335'} />
        <path d="M0 9v8l20 15V6l-5.6-4.2C8.46-2.65 0 1.58 0 9" fill={iconColor || '#C5221F'} />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h88v66H0z" />
        </clipPath>
      </defs>
    </Svg>
  );
}

export default GmailIcon;
