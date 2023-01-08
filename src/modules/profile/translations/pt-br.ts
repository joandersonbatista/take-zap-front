import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtProfileTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'profile', {
    menu_label: 'Perfil',
  });
};
