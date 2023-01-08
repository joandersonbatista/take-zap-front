import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnDashboardTranslations } from '@/modules/dashboard/translations/en';
import { registerPtDashboardTranslations } from '@/modules/dashboard/translations/pt-br';

export const registerDashboardTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnDashboardTranslations(translationsManager);
  registerPtDashboardTranslations(translationsManager);
};
