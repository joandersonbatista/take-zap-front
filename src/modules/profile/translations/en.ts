import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnProfileTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'profile', {
    menu_label: 'Profile',
  });
};
