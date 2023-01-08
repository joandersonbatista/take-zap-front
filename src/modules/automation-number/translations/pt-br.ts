import { TranslationsManager } from '@/translation/translations-manager';

export const registerPtAutomationNumberTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('ptBr', 'automationNumber', {
    menu_label: 'Automação',
  });
};
