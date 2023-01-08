import styled from 'styled-components';

import { Icon as DefaultIcon } from '@/common/components/icon/icon';

export const Container = styled.div`
  height: 100%;
  border-radius: 6px;
  position: relative;
`;

export const DropDownSelect = styled.button<{
  $isClicked: boolean;
  $disabled: boolean;
}>`
  display: flex;
  align-items: center;
  border: none;
  height: 100%;
  cursor: ${({ $disabled }) => ($disabled ? 'auto' : 'pointer')};
  padding: 0px 17px;
  border-radius: 6px;
  transition: 0.3s;
  border: 1px solid rgba(50, 71, 92, 0.22);
  background: ${({ $isClicked, $disabled }) =>
    $isClicked || $disabled ? 'rgba(50, 71, 92, 0.1)' : 'none'};

  :hover {
    background: rgba(50, 71, 92, 0.1);
  }
`;

export const PlaceHolder = styled.span`
  color: rgba(50, 71, 92, 0.68);
  font-size: 0.9rem;
`;

export const DropDowListContainer = styled.div<{
  $showDropDow: boolean;
  $openOnTop: boolean;
}>`
  display: ${({ $showDropDow }) => ($showDropDow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  width: 100%;
  margin-top: 15px;
  transform: ${({ $openOnTop }) =>
    $openOnTop ? 'translateY(-120%);' : 'none'};
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0px 1px 3px 2px rgba(50, 71, 92, 0.06),
    0px 2px 5px 1px rgba(50, 71, 92, 0.04),
    0px 1px 3px 2px rgba(50, 71, 92, 0.02);
`;

export const DropDowListContent = styled.button`
  background: none;
  color: inherit;
  border: none;
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background: rgba(50, 71, 92, 0.1);
  }
`;

export const DropDowIcon = styled(DefaultIcon).attrs({
  name: 'drop_down_strong',
})`
  height: 13px;
  width: 13px;
  margin-left: 20px;
`;
