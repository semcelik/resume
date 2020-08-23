import React, { ReactElement } from 'react';

import { TIconsProps } from '../Icons.type';

function ReactIcon({ iconColor, ...rest }: TIconsProps): ReactElement {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" {...rest}>
      <circle r={2.05} fill={iconColor || '#61dafb'} />
      <g stroke={iconColor || '#61dafb'} fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  );
}

export default ReactIcon;
