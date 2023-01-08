import { registerScreens } from '@/modules/messenger/navigation/register-screen';
import { registerMessengerTranslations } from '@/modules/messenger/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const messengerEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerMessengerTranslations(translationsManager);
};
