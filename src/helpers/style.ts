import Theme from 'constants/theme';
import { TTheme } from 'types/theme';

export function getOnDarkBoxShadow({ theme }: { theme: TTheme }): string {
  if (theme.type === Theme.DARK) {
    return `box-shadow: 0px 0px 5px 0px ${theme.colors.primary};`;
  }
  return '';
}
