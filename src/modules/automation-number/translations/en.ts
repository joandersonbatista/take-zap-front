import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnAutomationNumberTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'automationNumber', {
    menu_label: 'Automation',
  });
};
