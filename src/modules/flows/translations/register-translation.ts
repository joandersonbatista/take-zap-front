import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnFlowsTranslations } from '@/modules/flows/translations/en';
import { registerPtFlowsTranslations } from '@/modules/flows/translations/pt-br';

export const registerFlowsTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnFlowsTranslations(translationsManager);
  registerPtFlowsTranslations(translationsManager);
};
