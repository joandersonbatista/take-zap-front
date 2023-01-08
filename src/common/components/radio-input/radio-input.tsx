import { FunctionComponent } from 'react';

import * as Style from './radio-input.styles';
import type { Props } from './radio-input.types';

export const RadioInput: FunctionComponent<Props> = ({
  className,
  label,
  ...rest
}) => {
  return (
    <Style.Container className={className}>
      <Style.SelectInput {...(rest as any)} />
      {Boolean(label) && <Style.Label>{label}</Style.Label>}
    </Style.Container>
  );
};
