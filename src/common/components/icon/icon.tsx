import { cloneElement, FunctionComponent } from 'react';

import { IconManager } from '@/icon-manager';

import type { Props } from './icon.type';

export const Icon: FunctionComponent<Props> = (props) => {
  try {
    const IconAsset = IconManager.get(props.name);
    return cloneElement(<IconAsset />, props);
  } catch (err: unknown) {
    return null;
  }
};
