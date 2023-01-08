import * as iconsMapping from '@/assets-icon-mapping';
import { IconManager } from '@/icon-manager';

export const registerIcons = (iconManager: typeof IconManager): void => {
  Object.keys(iconsMapping).forEach((name) => {
    iconManager.add(name, (iconsMapping as Record<string, any>)[name]);
  });
};
