import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Icon as DefaultIcon } from '@/common/components/icon/icon';

import { StyledInterface } from './menu-items.type';

export const Container = styled.ul<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled(Link)<StyledInterface>`
  width: 83%;
  border-radius: 6px;
  padding: 10px 10px 10px 10px;
  display: flex;
  text-decoration: none;
  align-items: center;
  transition: 0.3s;
  justify-content: ${({ $isOpen }) => (!$isOpen ? 'center' : 'start')};
  background-color: ${({ $isActiveRoute }) =>
    $isActiveRoute ? '#232333;' : ''};
  transition: 0.3s;

  :hover span {
    color: #ffff;
  }

  :hover svg {
    stroke: #ffff;
  }
`;

export const Icon = styled(DefaultIcon)<StyledInterface>`
  height: 21px;
  width: 21px;
  margin-right: ${({ $isOpen }) => ($isOpen ? '10px' : '0px')};
  line-height: 20px;
  stroke: ${({ $isActiveRoute }) =>
    $isActiveRoute ? '#FFFF' : ' rgba(219, 219, 235, 0.68);'};
  transition: 0.3s;
`;

export const TitleMenu = styled.span<StyledInterface>`
  color: ${({ $isActiveRoute }) =>
    $isActiveRoute ? '#FFFF' : ' rgba(219, 219, 235, 0.68);'};
  font-size: 0.9rem;
  font-weight: 400;
  transition: color 0.3s;
  line-height: 24px;
  letter-spacing: 0.15px;
  transition: 0.3s;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const Li = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Indicator = styled.div<StyledInterface>`
  background-color: #8500ff;
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ $isActiveRoute }) => ($isActiveRoute ? '1' : '0')};
  height: 35px;
  width: 5px;
  right: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

export const MenuBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: auto;
  padding-bottom: 30px;
`;

export const Hr = styled.hr`
  width: 100%;
  margin-bottom: 20px;
  align-self: center;
  height: 0.4px;
  opacity: 0.2;
  background-color: rgba(50, 71, 92, 0.68);
  border: none;
`;
