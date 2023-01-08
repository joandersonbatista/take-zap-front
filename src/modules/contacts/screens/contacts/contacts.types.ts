export interface ContactData {
  id: string;
  info: {
    profileUrl: string;
    name: string;
  };
  busines: string;
  number: string;
  block: string;
  createdAt: string;
}

export enum ContactModals {
  delete = 'DELETE',
  batchDelete = 'BATCH_DELETE_',
  contact = 'CONTACT_',
  createContact = 'CREATE_CONTACT',
  filterContact = 'FILTER_CONTACT',
  blockContacts = 'BLOCK_CONTACTS',
}

export interface Props {
  contactsData: ContactData[];
  filterContact: string;
  disableActionsButton: boolean;
  selectedContact?: ContactData;
  getModalMapper: Record<ContactModals, boolean>;
  onChangeFilterContact: (value: string) => void;
  onSelectedRows: (contacts: ContactData[]) => void;
  onDeleteContact: () => void;
  onDeleteContactInBatch: () => void;
  handleCloseModal: (
    contactModal: ContactModals,
    contact?: ContactData
  ) => void;
  handleOpenModal: (contactModal: ContactModals, contact?: ContactData) => void;
}
