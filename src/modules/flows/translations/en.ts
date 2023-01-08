import { TranslationsManager } from '@/translation/translations-manager';

export const registerEnFlowsTranslations = (
  translationsManager: typeof TranslationsManager
): void => {
  translationsManager.add('en', 'flows', {
    menu_label: 'Flows',
  });
};
