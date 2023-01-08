import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnCommonTranslations } from '@/common/translations/en';
import { registerPtCommonTranslations } from '@/common/translations/pt-br';

export const registerCommonTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnCommonTranslations(translationsManager);
  registerPtCommonTranslations(translationsManager);
};
