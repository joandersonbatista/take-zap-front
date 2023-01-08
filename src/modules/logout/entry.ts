import { registerScreens } from '@/modules/logout/navigation/register-screen';
import { registerLogoutTranslations } from '@/modules/logout/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const logoutEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerLogoutTranslations(translationsManager);
};
