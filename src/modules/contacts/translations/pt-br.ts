import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtContactsTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'contacts', {
    menu_label: 'Contatos',
    tableHeaders: {
      profileImage: 'IMAGEM DO PERFIL',
      name: 'Nome',
      addedIn: 'ADICIONADO EM',
    },
    createContactButtonLabel: 'Criar Contato',
    searchContactPlaceHolder: 'Pesquisar por nome',
    deleteModalTitle: 'Deletar Contato',
    deleteModalInBatchTitle: 'Deletar Contatos',
    deleteModalInBatchSubtitle:
      'Você tem certeza que deseja excluir os contatos?',
    deleteModalSubtitle:
      'Você tem certeza que deseja excluir o contato {{contactName}}',
    actionsDropDownLabel: 'Ações em lote',
    filterButtonLabel: 'Filtro',
    actionsOptionsDeleteLabel: 'Deletar',
    actionsOptionsBlockLabel: 'Bloquear',
    actionsOptionsInsertInSequenceLabel: 'Inscrever-se na Sequência',
    contactModal: {
      subscribeInSequence: 'Inscrever-se na Sequência',
      sequenceNotFound: 'Sequência não encontrado',
      searchSequencePlaceHolder: 'Pesquisar sequência',
      whatsAppBussines: 'Whatsapp Business',
      whatsAppDefault: 'Whatsapp Normal',
      sendMessageButtonLabel: 'Enviar Mensagem',
      block: 'Bloqueado',
      subscribedSequences: 'Inscrito nas Sequências',
      saveButtonLabel: 'Salvar Alterações',
    },
    createContactModal: {
      titleModal: 'Criar Novo Contato',
      InfoMessage:
        'Para criar um Contato com sucesso, é obrigatório preencher o número de telefone',
      nameInputLabel: 'Nome',
      phoneNumberInputLabel: 'Número de telefone',
      nameInputPlaceHolder: 'Inserir nome',
      phoneNumberInputPlaceHolder: 'Inserir telefone',
      cancelButtonLabel: 'Cancelar',
      createButtonLabel: 'Criar',
    },
    filterModal: {
      titleModal: 'Filtrar Contatos',
      whatsAppType: 'Tipo do whatsApp',
      whatsAppBusines: 'Business',
      whatsAppStandart: 'Padrão',
      subscribedFrom: 'De',
      subscribedUntil: 'Até',
      filterByName: 'Filtrar por nome',
      filterByNamePlaceholder: 'Inserir nome',
      filterByPhoneNumber: 'Filtrar por número',
      filterByPhoneNumberPlaceholder: 'Inserir número de telefone',
      filterByDate: 'Adicionado nas datas',
      filterByBlocked: 'Bloqueado',
      cancelButtonLabel: 'Cancelar',
      createButtonLabel: 'Filtrar',
    },
  });
};
