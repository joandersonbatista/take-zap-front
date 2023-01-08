import styled from 'styled-components';

import { Button as DefaultButton } from '@/common/components/button/button';
import { ButtonTypes } from '@/common/components/button/button.types';
import { IconButton } from '@/common/components/icon-button/icon-button';
import { Icon } from '@/common/components/icon/icon';
import { Input as DefaultInput } from '@/common/components/input/input';
import { Modal as DefaultModal } from '@/common/components/modal/modal';
import { ToggleSwitch } from '@/common/components/toggle-switch/toggle-switch';

export const Modal = styled(DefaultModal)`
  width: 768px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 60px;
  height: 100%;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 25px;
  border-right: 1px solid #e1e5ea;
`;

export const ActionsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  width: 100%;
`;

export const ProfileImage = styled.img`
  height: 220px;
  border-radius: 8px;
  margin-bottom: 25px;
`;

export const ContactName = styled.span`
  font-size: 20px;
  color: rgba(50, 71, 92, 0.87);
`;

export const ActionLabel = styled.span`
  font-size: 16px;
  color: rgba(50, 71, 92, 0.87);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
`;

export const Sequence = styled.span`
  padding: 5px 30px 5px 10px;
  background: rgba(102, 108, 255, 0.12);
  border: 1px solid #696cff;
  border-radius: 8px;
  text-decoration-line: left;
  color: rgba(50, 71, 92, 0.68);
  font-size: 14px;
  margin-top: 11px;
  position: relative;
`;

export const SequenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  overflow: auto;

  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(50, 71, 92, 0.2);
    border-radius: 5px;
  }
`;

export const SequenceSubscribeButton = styled(DefaultButton).attrs({
  buttonType: ButtonTypes.tertiary,
})``;

export const RemoveContactInSequenceButton = styled(IconButton).attrs({
  name: 'close_icon',
})`
  position: absolute;
  right: 10px;
`;

export const Toggle = styled(ToggleSwitch)``;

export const ItemInfoIcon = styled(Icon)`
  height: 14px;
`;

export const ItemInfo = styled.span`
  font-size: 14px;
  color: rgba(50, 71, 92, 0.6);
  margin-left: 7px;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 11px;
`;

export const Button = styled(DefaultButton)<{ $withMarginTopAuto?: boolean }>`
  margin-top: ${({ $withMarginTopAuto }) =>
    $withMarginTopAuto !== undefined ? 'auto' : '20px'};
`;

export const Input = styled(DefaultInput)`
  width: 100%;
  margin-top: 10px;
`;

export const SearchSequenceContainer = styled.div`
  width: 100%;
  margin-top: 37px;
  position: relative;
`;

export const SearchSequenceContent = styled.div`
  width: 100%;
  margin-top: 10px;
  background-color: white;
  position: absolute;
  border-radius: 6px;
  padding: 10px;
  border: 1px solid rgba(50, 71, 92, 0.2);
`;

export const SequenceFound = styled.span`
  width: 100%;
  color: rgba(50, 71, 92, 0.85);
`;
