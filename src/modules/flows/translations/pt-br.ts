import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtFlowsTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'flows', {
    menu_label: 'Fluxos',
  });
};
