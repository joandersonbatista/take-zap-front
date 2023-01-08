import { observer } from 'mobx-react-lite';
import { useState, useEffect, ReactElement, FunctionComponent } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { sidebarState } from '@/common/state/sidebar.state';
import { MenuItemsManager } from '@/menu-items-manager';

import * as Style from './menu-items.style';
import type { MenuItem } from './menu-items.type';

const BaseMenuItems: FunctionComponent = () => {
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);
  const menu = MenuItemsManager.getMenuItems();
  const simpleMenu = menu.filter((v) => v.onBottom !== true);
  const menuOnBottom = menu.filter((v) => v.onBottom);

  useEffect(() => {
    const current = menu.find((v) => v.screenName === location.pathname);

    if (current == null) return;

    sidebarState.setCurrentScreen(current.label);
  }, []);

  function setCurrentScreen(label: string, path: string): void {
    setCurrentPath(path);
    sidebarState.setCurrentScreen(label);
  }

  function renderMenuItem(menu: MenuItem, index: number): ReactElement {
    const isActiveRoute = menu.screenName.startsWith(currentPath);

    return (
      <Style.Li key={index}>
        <Style.Content
          onClick={() => {
            setCurrentScreen(menu.label, menu.screenName);
          }}
          $isActiveRoute={isActiveRoute}
          to={menu.screenName}
          $isOpen={sidebarState.isOpen}
        >
          <Style.Icon
            $isActiveRoute={isActiveRoute}
            name={menu.icon}
            $isOpen={sidebarState.isOpen}
          />
          <Style.TitleMenu
            $isActiveRoute={isActiveRoute}
            $isOpen={sidebarState.isOpen}
          >
            {translate(menu.label)}
          </Style.TitleMenu>
        </Style.Content>

        <Style.Indicator
          $isOpen={sidebarState.isOpen}
          $isActiveRoute={isActiveRoute}
        />
      </Style.Li>
    );
  }

  return (
    <Style.Container $isOpen={sidebarState.isOpen}>
      {simpleMenu.map((menuItem, index) => renderMenuItem(menuItem, index))}
      <Style.MenuBottomContainer>
        <Style.Hr />
        {menuOnBottom.map((menuItem, index) => renderMenuItem(menuItem, index))}
      </Style.MenuBottomContainer>
    </Style.Container>
  );
};

export const MenuItems = withTranslation()(observer(BaseMenuItems));
