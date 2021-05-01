import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en_US } from './locals/en_US';
import { zh_CN } from './locals/zh_CN';

const resources = {
  en_US: {
    translation: en_US,
  },
  zh_CN: {
    translation: zh_CN,
  },
};

const isBrowser = typeof localStorage !== 'undefined';
const initialLanguage = isBrowser && localStorage.getItem('language');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: initialLanguage || 'zh_CN',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
