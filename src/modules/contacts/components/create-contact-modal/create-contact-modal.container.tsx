import { FunctionComponent } from 'react';

import { CreateContactModal } from './create-contact-modal';
import type { ContainerProps } from './create-contact-modal.types';

export const CreateContactModalContainer: FunctionComponent<ContainerProps> = (
  props
) => {
  function onSaveContact(): void {}

  return <CreateContactModal {...props} onSaveContact={onSaveContact} />;
};
