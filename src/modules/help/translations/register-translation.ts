import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnHelpTranslations } from '@/modules/help/translations/en';
import { registerPtHelpTranslations } from '@/modules/help/translations/pt-br';

export const registerHelpTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnHelpTranslations(translationsManager);
  registerPtHelpTranslations(translationsManager);
};
