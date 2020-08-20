import { LanguageDetectorModule } from 'i18next';

import LOCAL_STORAGE from 'constants/localStorage';
import LOCALE from 'constants/locale';

const i18nCache: LanguageDetectorModule = {
  type: 'languageDetector',
  init: () => {},
  detect: () => localStorage.getItem(LOCAL_STORAGE.LANGUAGE) || LOCALE.EN,
  cacheUserLanguage: (lng: string) => {
    localStorage.setItem(LOCAL_STORAGE.LANGUAGE, lng);
  },
};

export default i18nCache;
