import en from './en';
import I18n from 'i18next';

const systemLanguage = () => {
  let language = 'en';
  return language;
};

I18n.init({
  compatibilityJSON: 'v3',
  resources: {
    en,
  },
  lng: systemLanguage(),
  fallbackLng: 'en',
  whitelist: ['en'],
});

export default I18n;
