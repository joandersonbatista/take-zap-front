import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnHelpTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'help', {
    menu_label: 'Help',
  });
};
