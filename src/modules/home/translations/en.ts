import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnHomeTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'home', {
    menu_label: 'Home',
  });
};
