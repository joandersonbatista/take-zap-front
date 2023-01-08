import { FunctionComponent } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { ButtonTypes } from '@/common/components/button/button.types';

import * as Style from './filter-contact-modal.styles';
import type { Props } from './filter-contact-modal.types';

export const BaseFilterContactModal: FunctionComponent<Props> = ({
  show,
  onPressOut,
  onFilterContact,
}) => {
  return (
    <Style.Modal show={show} onPressOut={onPressOut}>
      <Style.TitleModal>
        {translate('contacts.filterModal.titleModal')}
      </Style.TitleModal>
      <Style.Hr />
      <Style.FormContent>
        <Style.Row>
          {translate('contacts.filterModal.filterByBlocked')}
          <Style.Toggle />
        </Style.Row>
        <Style.Label>
          {translate('contacts.filterModal.whatsAppType')}
        </Style.Label>
        <Style.RadioInput
          label={translate('contacts.filterModal.whatsAppBusines')}
        />
        <Style.RadioInput
          label={translate('contacts.filterModal.whatsAppStandart')}
        />
        <Style.Input
          label={translate('contacts.filterModal.filterByName')}
          placeholder={translate(
            'contacts.filterModal.filterByNamePlaceholder'
          )}
        />
        <Style.Input
          label={translate('contacts.filterModal.filterByPhoneNumber')}
          placeholder={translate(
            'contacts.filterModal.filterByPhoneNumberPlaceholder'
          )}
        />
        <Style.Label>
          {translate('contacts.filterModal.filterByDate')}
        </Style.Label>
        <Style.FilterDateContainer>
          <Style.Input
            type="date"
            $isDate
            label={translate('contacts.filterModal.subscribedFrom')}
          />
          <Style.Input
            type="date"
            $isDate
            label={translate('contacts.filterModal.subscribedUntil')}
          />
        </Style.FilterDateContainer>
      </Style.FormContent>
      <Style.FormFooter>
        <Style.Button
          buttonType={ButtonTypes.outline}
          label={translate('contacts.filterModal.cancelButtonLabel')}
          onClick={onPressOut}
        />
        <Style.Button
          label={translate('contacts.filterModal.createButtonLabel')}
          onClick={onFilterContact}
        />
      </Style.FormFooter>
    </Style.Modal>
  );
};

export const FilterContactModal = withTranslation()(BaseFilterContactModal);
