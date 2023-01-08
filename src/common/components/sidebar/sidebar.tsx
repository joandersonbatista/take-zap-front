import { observer } from 'mobx-react-lite';
import { FunctionComponent, ReactElement } from 'react';

import { MenuItems } from '@/common/components/menu-items/menu-items';

import { sidebarState } from '@/common/state/sidebar.state';

import * as Style from './sidebar.styles';

const BaseSidebar: FunctionComponent = () => {
  function onClickChevronSideBar(): void {
    sidebarState.setSidebar(!sidebarState.isOpen);
  }

  function renderHeader(): ReactElement {
    return (
      <Style.HeaderContainer $isOpen={sidebarState.isOpen}>
        <Style.IconLogo $isOpen={sidebarState.isOpen} />
        <Style.HeaderTitle $isOpen={sidebarState.isOpen}>
          takezap
        </Style.HeaderTitle>
        <Style.IconButton
          onClick={onClickChevronSideBar}
          $isOpen={sidebarState.isOpen}
        >
          <Style.IconChevronLeftContainer $isOpen={!sidebarState.isOpen} />
        </Style.IconButton>
      </Style.HeaderContainer>
    );
  }

  return (
    <Style.Container $isOpen={sidebarState.isOpen}>
      {renderHeader()}
      <Style.MenuContent>
        <MenuItems />
      </Style.MenuContent>
    </Style.Container>
  );
};

export const Sidebar = observer(BaseSidebar);
