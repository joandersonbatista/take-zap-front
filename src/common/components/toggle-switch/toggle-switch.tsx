import { FunctionComponent } from 'react';

import * as Style from './toggle-switch.styles';
import type { Props } from './toggle-switch.types';

export const ToggleSwitch: FunctionComponent<Props> = ({ className }) => {
  return (
    <Style.Container className={className}>
      <Style.Input type="checkbox" />
      <Style.Slider />
    </Style.Container>
  );
};
