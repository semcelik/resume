import Theme from 'constants/theme';
import { NOOP } from 'constants/common';

export const INITIAL_STATE = {
  theme: Theme.DARK,
  toggleTheme: NOOP,
};
