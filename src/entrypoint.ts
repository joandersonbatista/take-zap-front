import { RoutesManager } from '@/navigation/routes-manager';

import { TranslationsManager } from '@/translation/translations-manager';

export class EntrypointParams {
  public constructor(
    public routesManager: typeof RoutesManager,
    public translationsManager: typeof TranslationsManager
  ) {}
}
