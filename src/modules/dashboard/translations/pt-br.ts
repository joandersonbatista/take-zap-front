import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtDashboardTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'dashboard', {
    menu_label: 'Dashboard',
  });
};
