import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { AUTOMATION_NUMBER_SCREENS } from '@/modules/automation-number/navigation/screen-definitions';
import { AutomationNumberContainer } from '@/modules/automation-number/screens';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(AutomationNumberContainer, {
    isPrivate: true,
    path: AUTOMATION_NUMBER_SCREENS.automationNumber,
  });

  const menuItem = {
    label: 'automationNumber.menu_label',
    icon: 'automation_number',
    order: 6,
    screenName: AUTOMATION_NUMBER_SCREENS.automationNumber,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
