import styled from 'styled-components';

import { Icon } from '@/common/components/icon/icon';

import type { StyleSideBar } from './sidebar-type';

export const Container = styled.div<StyleSideBar>`
  background: #2b2c40;
  width: ${({ $isOpen }) => (!$isOpen ? '5rem' : '17rem')};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px -4px rgba(20, 21, 33, 1);
  transition: 0.3s;
  border-radius: 8px;

  :hover {
    .chevron-buton {
      opacity: 1;
    }
  }
`;

export const HeaderContainer = styled.div<StyleSideBar>`
  display: flex;
  flex-direction: row;
  position: relative;
  transition: 0.3s;
  padding: 29px 32px 20px ${({ $isOpen }) => ($isOpen ? '24px' : '32px')};
`;

export const HeaderTitle = styled.h1<StyleSideBar>`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 24px;
  letter-spacing: 0.15px;
  left: 55px;
  position: absolute;
  margin-top: 2.5px;
  color: rgba(219, 219, 235, 0.87);
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
`;

export const MenuContent = styled.div`
  flex: 1;
`;

export const IconButton = styled.button.attrs({
  className: 'chevron-buton',
})<StyleSideBar>`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transition: 0.3s;
  opacity: 0;
  position: absolute;
  left: ${({ $isOpen }) => (!$isOpen ? '78%' : '93%')};
  top: 35%;

  :hover {
    opacity: 1;
  }
`;

export const IconChevronLeftContainer = styled(Icon).attrs({
  name: 'chevron_sidebar',
  height: 30,
  width: 30,
})<StyleSideBar>`
  transition: 0.3s;
  transform: ${({ $isOpen }) => (!$isOpen ? 'rotate(0)' : 'rotate(-180deg)')};
  filter: drop-shadow(0px 0px 2px rgb(0 0 0 / 0.3));
`;

export const IconLogo = styled(Icon).attrs({
  name: 'logo',
})<StyleSideBar>`
  transition: 0.3s;
  scale: ${({ $isOpen }) => (!$isOpen ? '1.5' : '1')};
`;
