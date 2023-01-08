import { FunctionComponent, ReactElement } from 'react';
import { withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { ContactModalContainer } from '@/modules/contacts/components/contact-modal/contact-modal.container';
import { CreateContactModalContainer } from '@/modules/contacts/components/create-contact-modal/create-contact-modal.container';
import { FilterContactModalContainer } from '@/modules/contacts/components/filter-contact-modal/filter-contact-modal.container';

import { ButtonTypes } from '@/common/components/button/button.types';
import { DeleteModal } from '@/common/components/delete-modal/delete-modal';
import { SelectOption } from '@/common/components/drop-down/drop-down.types';
import { Table } from '@/common/components/table/table';
import { type Column } from '@/common/components/table/table.types';

import * as Style from './contacts.styles';
import { type ContactData, type Props, ContactModals } from './contacts.types';

const BaseContacts: FunctionComponent<Props> = ({
  contactsData,
  filterContact,
  disableActionsButton,
  selectedContact,
  getModalMapper,
  onChangeFilterContact,
  onSelectedRows,
  onDeleteContact,
  onDeleteContactInBatch,
  handleCloseModal,
  handleOpenModal,
}): ReactElement => {
  const tableColumns: Column<ContactData> = [
    {
      id: 'profileImage',
      header: translate('contacts.tableHeaders.profileImage'),
      accessorKey: 'contact',
      cell: ({ row }) => (
        <Style.ImageProfile src={row.original.info.profileUrl} />
      ),
    },
    {
      id: 'name',
      header: translate('contacts.tableHeaders.name'),
      accessorKey: 'number',
      cell: ({ row }) => (
        <Style.ContactName>{row.original.info.name}</Style.ContactName>
      ),
    },
    {
      id: 'createdAt',
      header: translate('contacts.tableHeaders.addedIn'),
      accessorKey: 'createdAt',
      cell: ({ row }) => (
        <Style.InfoContact>{row.original.createdAt}</Style.InfoContact>
      ),
    },
  ];

  const actionsOptions: SelectOption[] = [
    {
      label: translate('contacts.actionsOptionsDeleteLabel'),
      onClick: () => {
        handleOpenModal(ContactModals.batchDelete);
      },
    },
    {
      label: translate('contacts.actionsOptionsInsertInSequenceLabel'),
      onClick: onDeleteContact,
    },
    {
      label: translate('contacts.actionsOptionsBlockLabel'),
      onClick: onDeleteContact,
    },
  ];

  return (
    <Style.Container>
      <Style.ActionsContainer>
        <Style.SeacrhInput
          placeholder={translate('contacts.searchContactPlaceHolder')}
          iconName="search_icon"
          value={filterContact}
          onChange={(e) => {
            onChangeFilterContact(e.target.value);
          }}
          onPressIcon={() => undefined}
        />
        <Style.ActionsDropDown
          placeHolder={translate('contacts.actionsDropDownLabel')}
          disabled={disableActionsButton}
          selectOptions={actionsOptions}
        />
        <Style.CreateContactButton
          label={translate('contacts.createContactButtonLabel')}
          buttonType={ButtonTypes.outline}
          onClick={() => {
            handleOpenModal(ContactModals.createContact);
          }}
        />
        <Style.FilterButton
          label={translate('contacts.filterButtonLabel')}
          buttonType={ButtonTypes.default}
          onClick={() => {
            handleOpenModal(ContactModals.filterContact);
          }}
        />
      </Style.ActionsContainer>
      <Table
        columns={tableColumns}
        data={contactsData}
        onSelectRows={onSelectedRows}
        onDeleteData={(contact) => {
          handleOpenModal(ContactModals.delete, contact);
        }}
        onPressRow={(contact) => {
          handleOpenModal(ContactModals.contact, contact);
        }}
      />
      <DeleteModal
        title={translate('contacts.deleteModalTitle')}
        message={translate('contacts.deleteModalSubtitle', {
          contactName: selectedContact?.info.name,
        })}
        show={getModalMapper[ContactModals.delete]}
        onCancel={() => {
          handleCloseModal(ContactModals.delete);
        }}
        onConfirm={onDeleteContact}
      />
      <DeleteModal
        title={translate('contacts.deleteModalInBatchTitle')}
        message={translate('contacts.deleteModalInBatchSubtitle')}
        show={getModalMapper[ContactModals.batchDelete]}
        onCancel={() => {
          handleCloseModal(ContactModals.batchDelete);
        }}
        onConfirm={onDeleteContactInBatch}
      />
      <ContactModalContainer
        show={getModalMapper[ContactModals.contact]}
        contact={selectedContact}
        onPressOut={() => {
          handleCloseModal(ContactModals.contact);
        }}
      />
      <CreateContactModalContainer
        show={getModalMapper[ContactModals.createContact]}
        onPressOut={() => {
          handleCloseModal(ContactModals.createContact);
        }}
      />
      <FilterContactModalContainer
        show={getModalMapper[ContactModals.filterContact]}
        onPressOut={() => {
          handleCloseModal(ContactModals.filterContact);
        }}
      />
    </Style.Container>
  );
};

export const Contacts = withTranslation()(BaseContacts);
