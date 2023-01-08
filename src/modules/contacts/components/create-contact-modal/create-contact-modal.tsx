import { FunctionComponent } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { ButtonTypes } from '@/common/components/button/button.types';

import * as Style from './create-contact-modal.styles';
import type { Props } from './create-contact-modal.types';

const BaseCreateContactModal: FunctionComponent<Props> = ({
  show,
  onPressOut,
  onSaveContact,
}) => {
  return (
    <Style.Modal show={show} onPressOut={onPressOut}>
      <Style.TitleModal>
        {translate('contacts.createContactModal.titleModal')}
      </Style.TitleModal>
      <Style.Hr />
      <Style.FormContent>
        <Style.InfoMessage>
          {translate('contacts.createContactModal.InfoMessage')}
        </Style.InfoMessage>
        <Style.Input
          label={translate('contacts.createContactModal.nameInputLabel')}
          placeholder={translate(
            'contacts.createContactModal.nameInputPlaceHolder'
          )}
        />
        <Style.Input
          label={translate('contacts.createContactModal.phoneNumberInputLabel')}
          placeholder={translate(
            'contacts.createContactModal.phoneNumberInputPlaceHolder'
          )}
        />
      </Style.FormContent>
      <Style.FormFooter>
        <Style.Button
          buttonType={ButtonTypes.outline}
          label={translate('contacts.createContactModal.cancelButtonLabel')}
          onClick={onPressOut}
        />
        <Style.Button
          label={translate('contacts.createContactModal.createButtonLabel')}
          onClick={onSaveContact}
        />
      </Style.FormFooter>
    </Style.Modal>
  );
};

export const CreateContactModal = withTranslation()(BaseCreateContactModal);
