import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnHomeTranslations } from '@/modules/home/translations/en';
import { registerPtHomeTranslations } from '@/modules/home/translations/pt-br';

export const registerHomeTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnHomeTranslations(translationsManager);
  registerPtHomeTranslations(translationsManager);
};
