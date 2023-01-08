import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnContactsTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'contacts', {
    menu_label: 'Contacts',
    tableHeaders: {
      id: '# ID',
      profileImage: 'PROFILE IMAGE',
      name: 'Nome',
      addedIn: 'ADDED IN',
    },
    createContactButtonLabel: 'Create Contact',
    searchContactPlaceHolder: 'Search by name',
    deleteModalTitle: 'Delete Contact',
    deleteModalInBatchTitle: 'Delete Contacts',
    deleteModalInBatchSubtitle: 'Are you sure you want to delete contacts?',
    deleteModalSubtitle:
      'Are you sure you want to delete the contact {{contactName}}',
    actionsDropDownLabel: 'Shares in batches',
    filterButtonLabel: 'Filter',
    actionsOptionsDeleteLabel: 'Delete',
    actionsOptionsBlockLabel: 'Block',
    actionsOptionsInsertInSequenceLabel: 'Subscribe to Sequence',
    contactModal: {
      subscribeInSequence: 'Subscribe to Sequence',
      sequenceNotFound: 'Sequence not found',
      searchSequencePlaceHolder: 'Search sequence',
      whatsAppBussines: 'Whatsapp Business',
      whatsAppDefault: 'Whatsapp Standart',
      sendMessageButtonLabel: 'Send Message',
      block: 'Blocked',
      subscribedSequences: 'Subscribed to Sequences',
      saveButtonLabel: 'Save Editions',
    },
    createContactModal: {
      titleModal: 'Create New Contact',
      InfoMessage:
        'To successfully create a contact, it is mandatory to fill in the phone number',
      nameInputLabel: 'Name',
      phoneNumberInputLabel: 'Phone number',
      nameInputPlaceHolder: 'Insert name',
      phoneNumberInputPlaceHolder: 'Insert phone',
      cancelButtonLabel: 'Cancel',
      createButtonLabel: 'Create',
    },
    filterModal: {
      titleModal: 'Filter Contacts',
      whatsAppType: 'Whatsapp type',
      whatsAppBusines: 'Business',
      whatsAppStandart: 'Padrão',
      subscribedFrom: 'From',
      subscribedUntil: 'Until',
      filterByName: 'Filter by name',
      filterByNamePlaceholder: 'Insert name',
      filterByPhoneNumber: 'Filter by number',
      filterByPhoneNumberPlaceholder: 'Enter phone number',
      filterByDate: 'Added on dates',
      filterByBlocked: 'Blocked',
      cancelButtonLabel: 'Cancel',
      createButtonLabel: 'Filter',
    },
  });
};
