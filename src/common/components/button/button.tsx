import { FunctionComponent } from 'react';

import * as Style from './button.styles';
import { type Props, ButtonTypes } from './button.types';

export const Button: FunctionComponent<Props> = ({
  buttonType = ButtonTypes.default,
  label,
  iconName,
  disabled,
  ...rest
}) => {
  return (
    <Style.Button
      $type={buttonType}
      disabled={disabled}
      $disabled={Boolean(disabled)}
      {...rest}
    >
      {iconName !== undefined && <Style.Icon name={iconName} />}
      {label}
    </Style.Button>
  );
};
