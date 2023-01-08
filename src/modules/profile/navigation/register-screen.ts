import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { PROFILE_SCREENS } from '@/modules/profile/navigation/screen-definitions';
import { ProfileScreen } from '@/modules/profile/screens/profile.screen';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(ProfileScreen, {
    isPrivate: true,
    path: PROFILE_SCREENS.profile,
  });

  const menuItem = {
    label: 'profile.menu_label',
    icon: 'profile',
    order: 7,
    screenName: PROFILE_SCREENS.profile,
    /* onBottom: true, */
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
