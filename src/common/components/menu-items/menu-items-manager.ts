import { MenuItem } from './menu-items.type';

export class MenuItemsManager {
  private static menuItems: MenuItem[] = [];

  public static addMenu(menuItems: MenuItem[]): void {
    this.menuItems = [...this.menuItems, ...menuItems];
  }

  public static removeMenu(screenName: string): void {
    this.menuItems = this.menuItems.filter(
      (menuItem) => menuItem.screenName !== screenName
    );
  }

  public static getMenuItems(): MenuItem[] {
    return this.menuItems.sort(
      (itemOne: MenuItem, itemTwo: MenuItem) => itemOne.order - itemTwo.order
    );
  }

  public static reset(): void {
    this.menuItems = [];
  }
}
