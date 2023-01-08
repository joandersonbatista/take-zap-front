import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class SidebarState {
  public isOpen = true;

  public currentScreen = '';

  public constructor() {
    makeAutoObservable(this);

    void makePersistable(this, {
      name: 'SidebarState',
      properties: ['isOpen', 'currentScreen'],
      storage: window.localStorage,
    });
  }

  public setSidebar = (open: boolean): void => {
    this.isOpen = open;
  };

  public setCurrentScreen = (screen: string): void => {
    this.currentScreen = screen;
  };
}

const sidebarState = new SidebarState();

export { sidebarState };
