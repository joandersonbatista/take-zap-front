import { FunctionComponent } from 'react';

import * as Style from './modal.styles';
import type { Props, MouseEventHandler } from './modal.types';

export const Modal: FunctionComponent<Props> = ({
  onPressOut,
  show,
  children,
  className,
}) => {
  if (!show) return null;

  function stopPropagation(event: MouseEventHandler): void {
    event.stopPropagation();
  }

  return (
    <Style.Container onClick={onPressOut}>
      <Style.Content onClick={stopPropagation} className={className}>
        {children}
      </Style.Content>
    </Style.Container>
  );
};
