import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtMessengerTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'messenger', {
    menu_label: 'Mensageria',
  });
};
