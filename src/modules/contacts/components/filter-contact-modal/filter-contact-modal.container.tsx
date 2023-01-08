import { FunctionComponent } from 'react';

import { FilterContactModal } from './filter-contact-modal';
import type { ContainerProps } from './filter-contact-modal.types';

export const FilterContactModalContainer: FunctionComponent<ContainerProps> = (
  props
) => {
  function onFilterContact(): void {}

  return <FilterContactModal {...props} onFilterContact={onFilterContact} />;
};
