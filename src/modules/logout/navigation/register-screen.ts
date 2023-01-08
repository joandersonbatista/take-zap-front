import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { LOGOUT_SCREENS } from '@/modules/logout/navigation/screen-definitions';
import { LogoutContainer } from '@/modules/logout/screens/';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(LogoutContainer, {
    isPrivate: true,
    path: LOGOUT_SCREENS.logout,
  });

  const menuItem = {
    label: 'logout.menu_label',
    icon: 'logout',
    order: 9,
    screenName: LOGOUT_SCREENS.logout,
    onBottom: true,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
