import { registerScreens } from '@/modules/home/navigation/register-screen';
import { registerHomeTranslations } from '@/modules/home/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const homeEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerHomeTranslations(translationsManager);
};
