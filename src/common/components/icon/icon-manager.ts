import { FunctionComponent } from 'react';

import { IconClass } from './icon.type';

export class IconManager {
  private static componentClasses: IconClass = {};

  public static add(name: string, componentClass: FunctionComponent): void {
    IconManager.componentClasses[name] = componentClass;
  }

  public static get(name: string): FunctionComponent {
    if (IconManager.componentClasses[name] === undefined) {
      throw new Error(`Icon ${name} not found`);
    }

    return IconManager.componentClasses[name];
  }
}
