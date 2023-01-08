import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { MESSENGER_SCREENS } from '@/modules/messenger/navigation/screen-definitions';
import { MessengerScreen } from '@/modules/messenger/screens/messenger.screens';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(MessengerScreen, {
    isPrivate: true,
    path: MESSENGER_SCREENS.messenger,
  });

  const menuItem = {
    label: 'messenger.menu_label',
    icon: 'messenger',
    order: 5,
    screenName: MESSENGER_SCREENS.messenger,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
