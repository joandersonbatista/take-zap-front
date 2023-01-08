import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnProfileTranslations } from '@/modules/profile/translations/en';
import { registerPtProfileTranslations } from '@/modules/profile/translations/pt-br';

export const registerProfileTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnProfileTranslations(translationsManager);
  registerPtProfileTranslations(translationsManager);
};
