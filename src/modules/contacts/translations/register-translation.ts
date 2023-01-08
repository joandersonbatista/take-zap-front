import { TranslationsManager } from '@/translation/translations-manager';

import { registerEnContactsTranslations } from '@/modules/contacts/translations/en';
import { registerPtContactsTranslations } from '@/modules/contacts/translations/pt-br';

export const registerContactsTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  registerEnContactsTranslations(translationsManager);
  registerPtContactsTranslations(translationsManager);
};
