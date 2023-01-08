import { AppRoute } from '@/navigation/app-route';
import { RoutesManager } from '@/navigation/routes-manager';

import { CONTACTS_SCREENS } from '@/modules/contacts/navigation/screen-definitions';
import { ContactsContainer } from '@/modules/contacts/screens/contacts/contacts.container';

import { MenuItemsManager } from '@/menu-items-manager';

export const registerScreens = (routesManager: typeof RoutesManager): void => {
  const appRoute = new AppRoute(ContactsContainer, {
    isPrivate: true,
    path: CONTACTS_SCREENS.contacts,
  });

  const menuItem = {
    label: 'contacts.menu_label',
    icon: 'contacts',
    order: 2,
    screenName: CONTACTS_SCREENS.contacts,
  };

  MenuItemsManager.addMenu([menuItem]);

  routesManager.addSection(appRoute);
};
