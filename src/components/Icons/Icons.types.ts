import { SVGProps } from 'react';

export type TIconsProps = {
  iconColor?: string;
} & Omit<SVGProps<SVGSVGElement>, 'ref'>;
