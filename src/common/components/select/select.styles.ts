import styled, { css } from 'styled-components';

import { Icon as DefaultIcon } from '@/common/components/icon/icon';

export const Container = styled.div`
  height: 100%;
  border-radius: 12px;
  position: relative;
`;

export const DropDownSelect = styled.button<{
  $isClicked: boolean;
}>`
  display: flex;
  align-items: center;
  border: none;
  height: 100%;
  cursor: pointer;
  padding: 0px 8px;
  border-radius: 12px;
  transition: 0.3s;
  background: ${({ $isClicked }) =>
    $isClicked ? 'rgba(50, 71, 92, 0.1)' : 'none'};

  :hover {
    background: rgba(50, 71, 92, 0.1);
  }
`;

export const SelectedItem = styled.span`
  color: rgba(50, 71, 92, 0.68);
  font-size: 0.9rem;
  margin-left: 14px;
`;

export const DropDowListContainer = styled.div<{
  $showDropDow: boolean;
  $openOnTop: boolean;
  $position: 'left' | 'right';
}>`
  display: ${({ $showDropDow }) => ($showDropDow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  margin-top: 15px;
  transform: ${({ $openOnTop }) =>
    $openOnTop ? 'translateY(-120%);' : 'none'};
  border-radius: 12px;
  width: max-content;
  background: #ffffff;
  box-shadow: 0px 1px 3px 2px rgba(50, 71, 92, 0.06),
    0px 2px 5px 1px rgba(50, 71, 92, 0.04),
    0px 1px 3px 2px rgba(50, 71, 92, 0.02);

  ${({ $position }) => positionContentMapper[$position]};
`;

export const DropDowListContent = styled.button`
  border: none;
  background: none;
  padding: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 12px;

  :hover {
    background: rgba(50, 71, 92, 0.1);
  }
`;

export const LeftIcon = styled(DefaultIcon)`
  height: 22px;
  width: 22px;
`;

export const DropDowIcon = styled(DefaultIcon).attrs({
  name: 'drop_down',
})`
  height: 13px;
  width: 13px;
  margin-left: 14px;
`;

const positionContentMapper: Record<string, ReturnType<typeof css>> = {
  right: css`
    right: 0;
  `,
  left: css`
    left: 0;
  `,
};
