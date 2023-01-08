import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnDashboardTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'dashboard', {
    menu_label: 'Dashboard',
  });
};
