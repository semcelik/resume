import React, { ReactElement } from 'react';

import { TIconsProps } from '../Icons.types';
import { Svg } from '../Icons.style';

function LinkedInIcon({ iconColor, ...rest }: TIconsProps): ReactElement {
  return (
    <Svg width={79} height={79} viewBox="0 0 79 79" fill="none" {...rest}>
      <path
        d="M71.854 0H7.146A7.146 7.146 0 000 7.146v64.708C0 75.8 3.2 79 7.146 79h64.708C75.8 79 79 75.8 79 71.854V7.146C79 3.2 75.8 0 71.854 0zM24.446 68.214a2.08 2.08 0 01-2.08 2.08h-8.852a2.08 2.08 0 01-2.08-2.08v-37.11a2.08 2.08 0 012.08-2.08h8.852a2.08 2.08 0 012.08 2.08v37.11zM17.94 25.526a8.41 8.41 0 110-16.82 8.41 8.41 0 010 16.82zm52.77 42.855a1.912 1.912 0 01-1.913 1.912h-9.5a1.912 1.912 0 01-1.912-1.912V50.975c0-2.597.762-11.379-6.785-11.379-5.855 0-7.043 6.011-7.28 8.709V68.38a1.912 1.912 0 01-1.913 1.912h-9.188a1.912 1.912 0 01-1.912-1.912V30.937c0-1.056.856-1.912 1.912-1.912h9.188c1.056 0 1.912.856 1.912 1.912v3.237c2.17-3.258 5.397-5.772 12.266-5.772 15.211 0 15.124 14.21 15.124 22.019v17.96z"
        fill={iconColor || '#0077B7'}
      />
    </Svg>
  );
}

export default LinkedInIcon;