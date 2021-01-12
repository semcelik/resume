import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, tr } from 'translations';
import LOCALE from 'constants/locale';
import i18nCache from 'helpers/i18nCache';

i18n
  .use(i18nCache)
  .use(initReactI18next)
  .init({
    fallbackLng: LOCALE.EN,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      [LOCALE.EN]: {
        translation: en,
      },
      [LOCALE.TR]: {
        translation: tr,
      },
    },
  });
