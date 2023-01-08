import styled from 'styled-components';

import { Button } from '@/common/components/button/button';
import { ButtonTypes } from '@/common/components/button/button.types';
import { Icon } from '@/common/components/icon/icon';
import { Modal as DefaultModal } from '@/common/components/modal/modal';

export const Modal = styled(DefaultModal)`
  width: 550px;
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const HeaderTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgba(50, 71, 92, 0.87);
`;

export const Message = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: rgba(50, 71, 92, 0.87);
`;

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  margin-left: auto;
  height: max-content;
`;

export const ActionsButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const AlertIcon = styled(Icon).attrs({
  name: 'alert_icon',
})`
  margin-right: 15px;
`;

export const closeIcon = styled(Icon).attrs({
  name: 'close_icon',
  height: 15,
  width: 15,
})``;

export const ConfirmButton = styled(Button).attrs({
  buttonType: ButtonTypes.danger,
})``;

export const CancelButton = styled(Button).attrs({
  buttonType: ButtonTypes.outline,
})`
  margin-right: 10px;
`;
