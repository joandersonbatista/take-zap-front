import { FunctionComponent } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { ButtonTypes } from '@/common/components/button/button.types';

import * as Style from './contact-modal.styles';
import type { Props } from './contact-modal.types';

const BaseContactModal: FunctionComponent<Props> = ({
  show,
  showSearcheSequence,
  contact,
  onPressOut,
  goToSendMessage,
  handleCloseSearchSequence,
  handleOpenSearchSequence,
}) => {
  return (
    <Style.Modal show={show} onPressOut={onPressOut}>
      <Style.Container>
        <Style.ProfileContent>
          <Style.ProfileImage src={contact?.info.profileUrl} />
          <Style.ItemInfoContainer>
            <Style.ItemInfoIcon name="phone_icon" />
            <Style.ItemInfo>{contact?.number}</Style.ItemInfo>
          </Style.ItemInfoContainer>
          <Style.ItemInfoContainer>
            <Style.ItemInfoIcon name="whatsapp" />
            <Style.ItemInfo>
              {translate('contacts.contactModal.whatsAppBussines')}
            </Style.ItemInfo>
          </Style.ItemInfoContainer>
          <Style.ItemInfoContainer>
            <Style.ItemInfoIcon name="world_icon" />
            <Style.ItemInfo>Brasil</Style.ItemInfo>
          </Style.ItemInfoContainer>
          <Style.ItemInfoContainer>
            <Style.ItemInfoIcon name="uuid_icon" />
            <Style.ItemInfo>{contact?.id}</Style.ItemInfo>
          </Style.ItemInfoContainer>
          <Style.Button
            label={translate('contacts.contactModal.sendMessageButtonLabel')}
            onClick={goToSendMessage}
          />
        </Style.ProfileContent>

        <Style.ActionsContent>
          <Style.ContactName>{contact?.info.name}</Style.ContactName>
          <Style.Row>
            <Style.ActionLabel>
              {translate('contacts.contactModal.block')}
            </Style.ActionLabel>
            <Style.Toggle />
          </Style.Row>
          <Style.SearchSequenceContainer>
            <Style.ActionLabel>
              {translate('contacts.contactModal.subscribeInSequence')}
            </Style.ActionLabel>
            <Style.Input
              placeholder={translate(
                'contacts.contactModal.searchSequencePlaceHolder'
              )}
              onFocus={handleOpenSearchSequence}
              onBlur={handleCloseSearchSequence}
            />
            {showSearcheSequence && (
              <Style.SearchSequenceContent>
                <Style.SequenceFound>
                  {translate('contacts.contactModal.sequenceNotFound')}
                </Style.SequenceFound>
              </Style.SearchSequenceContent>
            )}
          </Style.SearchSequenceContainer>
          <Style.Row>
            <Style.ActionLabel>
              {translate('contacts.contactModal.subscribedSequences')}
            </Style.ActionLabel>
          </Style.Row>
          <Style.SequenceContainer>
            <Style.Sequence>
              Estudos 2023{' '}
              <Style.RemoveContactInSequenceButton onPress={() => undefined} />
            </Style.Sequence>
          </Style.SequenceContainer>
          <Style.Button
            label={translate('contacts.contactModal.saveButtonLabel')}
            $withMarginTopAuto
            buttonType={ButtonTypes.outline}
            disabled
          />
        </Style.ActionsContent>
      </Style.Container>
    </Style.Modal>
  );
};

export const ContactModal = withTranslation()(BaseContactModal);
