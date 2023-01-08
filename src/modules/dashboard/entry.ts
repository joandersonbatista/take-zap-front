import { registerScreens } from '@/modules/dashboard/navigation/register-screen';
import { registerDashboardTranslations } from '@/modules/dashboard/translations/register-translation';

import { EntrypointParams } from '@/entrypoint';

export const dashboardEntry = ({
  routesManager,
  translationsManager,
}: EntrypointParams): void => {
  registerScreens(routesManager);
  registerDashboardTranslations(translationsManager);
};
