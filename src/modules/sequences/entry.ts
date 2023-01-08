import { registerScreens } from '@/modules/sequences/navigation/register-screen';
import { registerSequencesTranslations } from '@/modules/sequences/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const sequencesEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerSequencesTranslations(translationsManager);
};
