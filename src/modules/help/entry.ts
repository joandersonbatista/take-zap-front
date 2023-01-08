import { registerScreens } from '@/modules/help/navigation/register-screen';
import { registerHelpTranslations } from '@/modules/help/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const helpEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerHelpTranslations(translationsManager);
};
