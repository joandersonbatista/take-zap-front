import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnMessengerTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'messenger', {
    menu_label: 'Messenger',
  });
};
