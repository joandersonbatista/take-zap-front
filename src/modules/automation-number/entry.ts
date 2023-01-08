import { registerScreens } from '@/modules/automation-number/navigation/register-screen';
import { registerAutomationNumberTranslations } from '@/modules/automation-number/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const automationNumberEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerAutomationNumberTranslations(translationsManager);
};
