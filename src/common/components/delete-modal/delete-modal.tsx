import { FunctionComponent, ReactElement } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import * as Style from './delete-modal.styles';
import type { Props } from './delete-modal.types';

const BaseDeleteModal: FunctionComponent<Props> = ({
  show,
  title,
  message,
  onCancel,
  onConfirm,
}) => {
  function renderHeder(): ReactElement {
    return (
      <Style.HeaderContainer>
        <Style.AlertIcon />
        <Style.HeaderContent>
          <Style.HeaderTitle>{title}</Style.HeaderTitle>
          <Style.Message>{message}</Style.Message>
        </Style.HeaderContent>
        <Style.CloseButton onClick={onCancel}>
          <Style.closeIcon />
        </Style.CloseButton>
      </Style.HeaderContainer>
    );
  }

  function renderFooter(): ReactElement {
    return (
      <Style.ActionsButtonContainer>
        <Style.CancelButton
          label={translate('common.deleteModal.cancelButtonLabel')}
          onClick={onCancel}
        />
        <Style.ConfirmButton
          label={translate('common.deleteModal.confirmButtonLabel')}
          onClick={onConfirm}
        />
      </Style.ActionsButtonContainer>
    );
  }

  return (
    <Style.Modal show={show} onPressOut={onCancel}>
      {renderHeder()}
      {renderFooter()}
    </Style.Modal>
  );
};

export const DeleteModal = withTranslation()(BaseDeleteModal);
