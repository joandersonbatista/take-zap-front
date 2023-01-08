import { RouterProvider } from 'react-router-dom';

import { RoutesManager } from '@/navigation/routes-manager';

import { initializeI18n } from '@/translation/initialize';

import { registerModules } from '@/register-modules';

import { IconManager } from '@/icon-manager';
import { registerIcons } from '@/register-icons';

registerModules();
initializeI18n();
registerIcons(IconManager);

export function App(): JSX.Element {
  return <RouterProvider router={RoutesManager.generateReactRoutes()} />;
}
