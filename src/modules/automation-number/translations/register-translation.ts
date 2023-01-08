import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnAutomationNumberTranslations } from '@/modules/automation-number/translations/en';
import { registerPtAutomationNumberTranslations } from '@/modules/automation-number/translations/pt-br';

export const registerAutomationNumberTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnAutomationNumberTranslations(translationsManager);
  registerPtAutomationNumberTranslations(translationsManager);
};
