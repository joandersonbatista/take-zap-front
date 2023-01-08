import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtSequencesTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'sequences', {
    menu_label: 'Sequências',
  });
};
