import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { FLOWS_SCREENS } from '@/modules/flows/navigation/screen-definitions';
import { FlowsContainer } from '@/modules/flows/screens/';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(FlowsContainer, {
    isPrivate: true,
    path: FLOWS_SCREENS.flows,
  });

  const menuItem = {
    label: 'flows.menu_label',
    icon: 'flows',
    order: 3,
    screenName: FLOWS_SCREENS.flows,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
