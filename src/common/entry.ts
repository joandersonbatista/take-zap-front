import { EntrypointParams } from '@/entrypoint';

import { registerCommonTranslations } from '@/common/translations/register-translation';

export const commonEntry = ({
  translationsManager,
}: EntrypointParams): void => {
  registerCommonTranslations(translationsManager);
};
