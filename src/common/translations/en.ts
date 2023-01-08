import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnCommonTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'common', {
    navBar: {
      selectLanguagePtBr: 'Portuguese (BR)',
      selectLanguageEnUs: 'English (US)',
      userType: 'Owner',
    },
    table: {
      rowsPerPage: 'Rows per page:',
      of: '{{pageIndex}} of {{pageCount}}',
      headers: {
        actions: 'ACTIONS',
      },
    },
    deleteModal: {
      confirmButtonLabel: 'Delete',
      cancelButtonLabel: 'Cancel',
    },
  });
};
