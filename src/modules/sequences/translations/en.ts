import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnSequencesTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'sequences', {
    menu_label: 'Sequences',
  });
};
