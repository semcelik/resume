import { enGB, tr } from 'date-fns/locale';

const LOCALE = {
  EN: 'en',
  TR: 'tr',
};

export const DATE_LOCALE = {
  [LOCALE.EN]: enGB,
  [LOCALE.TR]: tr,
};

export default LOCALE;
