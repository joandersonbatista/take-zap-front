import { registerScreens } from '@/modules/contacts/navigation/register-screen';
import { registerContactsTranslations } from '@/modules/contacts/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const contactEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerContactsTranslations(translationsManager);
};
