import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnSequencesTranslations } from '@/modules/sequences/translations/en';
import { registerPtSequencesTranslations } from '@/modules/sequences/translations/pt-br';

export const registerSequencesTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnSequencesTranslations(translationsManager);
  registerPtSequencesTranslations(translationsManager);
};
