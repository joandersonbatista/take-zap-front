import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnLogoutTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'logout', {
    menu_label: 'Logout',
  });
};
