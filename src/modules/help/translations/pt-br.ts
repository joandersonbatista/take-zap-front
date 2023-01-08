import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtHelpTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'help', {
    menu_label: 'Ajuda',
  });
};
