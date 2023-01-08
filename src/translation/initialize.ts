import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { TranslationsManager } from '@/translation/translations-manager';

export const initializeI18n = (): void => {
  void i18n.use(initReactI18next).init({
    resources: {
      pt: {
        translation: TranslationsManager.generateTranslations('ptBr'),
      },
      en: {
        translation: TranslationsManager.generateTranslations('en'),
      },
    },
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
      defaultVariables: TranslationsManager.getVariables(),
    },
  });
};
