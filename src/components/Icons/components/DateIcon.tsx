import React, { ReactElement } from 'react';

import { TIconsProps } from '../Icons.type';

function DateIcon({ iconColor, ...rest }: TIconsProps): ReactElement {
  return (
    <svg width={16} height={16} viewBox="0 0 16 17" fill="none" {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4 14.4V3.2c0-.88-.72-1.6-1.6-1.6H12V0h-1.6v1.6H4V0H2.4v1.6h-.8C.712 1.6.008 2.32.008 3.2L0 14.4c0 .88.712 1.6 1.6 1.6h11.2c.88 0 1.6-.72 1.6-1.6zM4.8 7.2H3.2v1.6h1.6V7.2zM1.6 4.8h11.2V3.2H1.6v1.6zm11.2 1.6v8H1.6v-8h11.2zM9.6 8.8h1.6V7.2H9.6v1.6zM8 8.8H6.4V7.2H8v1.6z"
        fill={iconColor}
      />
    </svg>
  );
}

export default DateIcon;
