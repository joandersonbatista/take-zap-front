import { RoutesManager } from '@/navigation/routes-manager';

import { TranslationsManager } from '@/translation/translations-manager';

import { automationNumberEntry } from '@/modules/automation-number/entry';
import { contactEntry } from '@/modules/contacts/entry';
import { dashboardEntry } from '@/modules/dashboard/entry';
import { flowsEntry } from '@/modules/flows/entry';
import { helpEntry } from '@/modules/help/entry';
import { homeEntry } from '@/modules/home/entry';
import { logoutEntry } from '@/modules/logout/entry';
import { messengerEntry } from '@/modules/messenger/entry';
import { profileScreen } from '@/modules/profile/entry';
import { sequencesEntry } from '@/modules/sequences/entry';

import { EntrypointParams } from '@/entrypoint';

import { commonEntry } from '@/common/entry';

const defaultEntrypointParams: EntrypointParams = {
  routesManager: RoutesManager,
  translationsManager: TranslationsManager,
};

export const registerModules = (
  entryParams: EntrypointParams = defaultEntrypointParams
): void => {
  homeEntry(entryParams);
  contactEntry(entryParams);
  flowsEntry(entryParams);
  sequencesEntry(entryParams);
  messengerEntry(entryParams);
  dashboardEntry(entryParams);
  automationNumberEntry(entryParams);
  profileScreen(entryParams);
  logoutEntry(entryParams);
  helpEntry(entryParams);
  commonEntry(entryParams);
};
