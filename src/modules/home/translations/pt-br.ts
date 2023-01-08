import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtHomeTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'home', {
    menu_label: 'Início',
  });
};
