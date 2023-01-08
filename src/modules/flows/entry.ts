import { registerScreens } from '@/modules/flows/navigation/register-screen';
import { registerFlowsTranslations } from '@/modules/flows/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const flowsEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerFlowsTranslations(translationsManager);
};
