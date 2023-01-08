import { FunctionComponent } from 'react';

import { NavBar } from '@/common/components/nav-bar/nav-bar';
import { Sidebar } from '@/common/components/sidebar/sidebar';

import {
  Container,
  GlobalStyle,
  Content,
  ChildrenContent,
} from './layout.styles';
import type { Props } from './layout.type';

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Sidebar />
      <Content>
        <NavBar />
        <ChildrenContent>{children}</ChildrenContent>
      </Content>
    </Container>
  );
};
