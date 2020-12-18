import React, { ReactElement } from 'react';

import { TIconsProps } from '../Icons.types';
import { Svg } from '../Icons.style';

function GitHubIcon({ iconColor, ...rest }: TIconsProps): ReactElement {
  return (
    <Svg width={65} height={65} viewBox="0 0 65 65" fill="none" {...rest}>
      <path
        d="M58.036 0H6.964A6.966 6.966 0 000 6.964v51.072A6.966 6.966 0 006.964 65h51.072A6.966 6.966 0 0065 58.036V6.964A6.966 6.966 0 0058.036 0zM40.233 55.67c-1.218.218-1.668-.536-1.668-1.16 0-.783.029-4.788.029-8.023 0-2.264-.755-3.7-1.64-4.455 5.368-.594 11.027-1.334 11.027-10.606 0-2.64-.943-3.96-2.481-5.658.247-.624 1.074-3.192-.247-6.53-2.016-.623-6.63 2.598-6.63 2.598a22.605 22.605 0 00-6.036-.813c-2.046 0-4.12.276-6.036.813 0 0-4.613-3.221-6.63-2.597-1.32 3.322-.508 5.89-.247 6.529-1.538 1.697-2.263 3.018-2.263 5.658 0 9.228 5.412 10.012 10.78 10.606-.697.624-1.32 1.698-1.538 3.236-1.378.624-4.904 1.697-7.008-2.017-1.32-2.292-3.7-2.48-3.7-2.48-2.35-.03-.16 1.479-.16 1.479 1.568.725 2.67 3.511 2.67 3.511 1.408 4.31 8.14 2.858 8.14 2.858 0 2.017.029 5.296.029 5.891 0 .624-.435 1.378-1.669 1.16C15.38 52.465 8.676 43.354 8.676 32.704c0-13.32 10.186-23.432 23.505-23.432 13.319 0 24.114 10.113 24.114 23.432.014 10.65-6.486 19.776-16.062 22.968zM26 46.807c-.276.058-.537-.058-.566-.247-.029-.217.16-.406.435-.464.276-.03.537.087.566.276.044.188-.145.377-.435.435zm-1.378-.13c0 .188-.218.347-.508.347-.32.03-.537-.13-.537-.348 0-.188.218-.348.508-.348.275-.029.537.13.537.348zm-1.988-.16c-.058.188-.348.275-.595.188-.276-.058-.464-.275-.406-.464.058-.189.348-.276.595-.218.29.087.478.305.406.494zm-1.785-.784c-.13.16-.406.13-.624-.087-.217-.189-.275-.464-.13-.595.13-.16.406-.13.624.087.188.189.26.48.13.595zm-1.32-1.32c-.13.087-.377 0-.537-.218-.16-.217-.16-.464 0-.566.16-.13.406-.029.537.189.16.218.16.479 0 .595zm-.943-1.407c-.13.13-.348.057-.508-.088-.16-.188-.188-.406-.058-.507.13-.131.348-.058.508.087.16.188.189.406.058.508zm-.972-1.074c-.058.13-.247.16-.406.058-.189-.087-.276-.247-.218-.377.058-.087.218-.131.406-.058.189.101.276.26.218.377z"
        fill={iconColor || '#000'}
      />
    </Svg>
  );
}

export default GitHubIcon;