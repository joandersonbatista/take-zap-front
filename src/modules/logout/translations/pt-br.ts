import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtLogoutTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'logout', {
    menu_label: 'Sair',
  });
};
