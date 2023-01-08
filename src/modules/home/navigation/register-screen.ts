import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { HOME_SCREENS } from '@/modules/home/navigation/screen-definitions';
import { HomeContainer } from '@/modules/home/screens/';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(HomeContainer, {
    isPrivate: true,
    path: HOME_SCREENS.home,
  });

  const menuItem = {
    label: 'home.menu_label',
    icon: 'home',
    order: 0,
    screenName: HOME_SCREENS.home,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
