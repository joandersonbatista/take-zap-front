import { FunctionComponent, useState, useEffect } from 'react';

import { Contacts } from '@/modules/contacts/screens/contacts/contacts';

import { type ContactData, ContactModals } from './contacts.types';

export const ContactsContainer: FunctionComponent = () => {
  const SELECTED_MINIMUN_CONTACTS_TO_ENABLE_ACTIONS_BUTTON = 2;

  const [filterContact, setFilterContact] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteModalInBacth, setShowDeleteModalInBacth] = useState(false);
  const [showFilterContact, setShowFilterContact] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showBlockContactsModal, setShowBlockContactsModal] = useState(false);
  const [showCreateContactModal, setShowCreateContactModal] = useState(false);
  const [disableActionsButton, setDisableActionsButton] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactData>();
  const [selectionsRowsData, setSelectionsRowsData] = useState<ContactData[]>(
    []
  );

  const setModalMapper: Record<ContactModals, (...atrs: any) => void> = {
    [ContactModals.delete]: (open: boolean, contact: ContactData) => {
      setShowDeleteModal(open);
      setSelectedContact(contact);
    },
    [ContactModals.batchDelete]: (open: boolean) => {
      setShowDeleteModalInBacth(open);
    },
    [ContactModals.contact]: (open: boolean, contact: ContactData) => {
      setShowContactModal(open);
      setSelectedContact(contact);
    },
    [ContactModals.createContact]: (open: boolean) => {
      setShowCreateContactModal(open);
    },
    [ContactModals.filterContact]: (open: boolean) => {
      setShowFilterContact(open);
    },
    [ContactModals.blockContacts]: (open: boolean) => {
      setShowBlockContactsModal(open);
    },
  };

  const getModalMapper: Record<ContactModals, boolean> = {
    [ContactModals.delete]: showDeleteModal,
    [ContactModals.batchDelete]: showDeleteModalInBacth,
    [ContactModals.contact]: showContactModal,
    [ContactModals.createContact]: showCreateContactModal,
    [ContactModals.filterContact]: showFilterContact,
    [ContactModals.blockContacts]: showBlockContactsModal,
  };

  const data: ContactData[] = [
    {
      id: '#01',
      info: {
        profileUrl: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Joanderson Batista',
      },
      number: '+55 (11) 99374-7417',
      busines: 'SIM',
      block: 'NÃO',
      createdAt: '22 Oct 2019',
    },
    {
      id: '#01',
      info: {
        profileUrl: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Joanderson Batista',
      },
      number: '+55 (11) 99374-7417',
      busines: 'SIM',
      block: 'NÃO',
      createdAt: '22 Oct 2019',
    },
    {
      id: '#01',
      info: {
        profileUrl: 'https://www.w3schools.com/w3images/avatar2.png',
        name: 'Joanderson Batista',
      },
      number: '+55 (11) 99374-7417',
      busines: 'SIM',
      block: 'NÃO',
      createdAt: '22 Oct 2019',
    },
  ];

  function onSelectedRows(data: ContactData[]): void {
    setSelectionsRowsData(data);

    if (data.length >= SELECTED_MINIMUN_CONTACTS_TO_ENABLE_ACTIONS_BUTTON) {
      setDisableActionsButton(false);
    }

    if (data.length < SELECTED_MINIMUN_CONTACTS_TO_ENABLE_ACTIONS_BUTTON) {
      setDisableActionsButton(true);
    }
  }

  function onDeleteContact(): void {
    console.log(selectedContact);
  }

  function onDeleteContactInBatch(): void {
    console.log(selectionsRowsData);
  }

  function handleCloseModal(
    contactModal: ContactModals,
    contact?: ContactData
  ): void {
    setModalMapper[contactModal](false, contact);
  }

  function handleOpenModal(
    contactModal: ContactModals,
    contact?: ContactData
  ): void {
    setModalMapper[contactModal](true, contact);
  }

  useEffect(() => {
    console.log('oia que louco', selectionsRowsData);
  }, [selectionsRowsData]);

  return (
    <Contacts
      contactsData={data}
      filterContact={filterContact}
      disableActionsButton={disableActionsButton}
      selectedContact={selectedContact}
      getModalMapper={getModalMapper}
      onChangeFilterContact={setFilterContact}
      onSelectedRows={onSelectedRows}
      onDeleteContact={onDeleteContact}
      onDeleteContactInBatch={onDeleteContactInBatch}
      handleCloseModal={handleCloseModal}
      handleOpenModal={handleOpenModal}
    />
  );
};
