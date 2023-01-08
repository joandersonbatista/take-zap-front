import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnMessengerTranslations } from '@/modules/messenger/translations/en';
import { registerPtMessengerTranslations } from '@/modules/messenger/translations/pt-br';

export const registerMessengerTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnMessengerTranslations(translationsManager);
  registerPtMessengerTranslations(translationsManager);
};
