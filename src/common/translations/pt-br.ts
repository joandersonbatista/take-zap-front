import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtCommonTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'common', {
    navBar: {
      selectLanguagePtBr: 'Portugês (BR)',
      selectLanguageEnUs: 'Inglês (US)',
      userType: 'Organizador',
    },
    table: {
      rowsPerPage: 'Linhas por página:',
      of: '{{pageIndex}} de {{pageCount}}',
      headers: {
        actions: 'AÇÕES',
      },
    },
    deleteModal: {
      confirmButtonLabel: 'Deletar',
      cancelButtonLabel: 'Cancelar',
    },
  });
};
