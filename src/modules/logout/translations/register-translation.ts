import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnLogoutTranslations } from '@/modules/logout/translations/en';
import { registerPtLogoutTranslations } from '@/modules/logout/translations/pt-br';

export const registerLogoutTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnLogoutTranslations(translationsManager);
  registerPtLogoutTranslations(translationsManager);
};
