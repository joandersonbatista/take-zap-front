import { registerScreens } from '@/modules/profile/navigation/register-screen';
import { registerProfileTranslations } from '@/modules/profile/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const profileScreen = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerProfileTranslations(translationsManager);
};
