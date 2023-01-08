import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { SEQUENCES_SCREENS } from '@/modules/sequences/navigation/screen-definitions';
import { SequencesScreen } from '@/modules/sequences/screens/sequences.screen';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(SequencesScreen, {
    isPrivate: true,
    path: SEQUENCES_SCREENS.sequences,
  });

  const menuItem = {
    label: 'sequences.menu_label',
    icon: 'sequences',
    order: 4,
    screenName: SEQUENCES_SCREENS.sequences,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
