import { FunctionComponent, useState } from 'react';

import { ContactModal } from './contact-modal';
import type { ContainerProps } from './contact-modal.types';

export const ContactModalContainer: FunctionComponent<ContainerProps> = (
  props
) => {
  const [showSearcheSequence, setShowSearchSequence] = useState(false);

  function handleCloseSearchSequence(): void {
    setShowSearchSequence(false);
  }

  function handleOpenSearchSequence(): void {
    setShowSearchSequence(true);
  }

  function goToSendMessage(): void {}

  return (
    <ContactModal
      {...props}
      showSearcheSequence={showSearcheSequence}
      goToSendMessage={goToSendMessage}
      handleCloseSearchSequence={handleCloseSearchSequence}
      handleOpenSearchSequence={handleOpenSearchSequence}
    />
  );
};
