import { FunctionComponent } from 'react';

import * as Style from './input.styles';
import type { Props } from './input.types';

export const Input: FunctionComponent<Props> = ({
  onPressIcon,
  iconName,
  label,
  className,
  ...rest
}) => {
  const isWithIcon = Boolean(iconName);

  return (
    <Style.Container className={className}>
      {Boolean(label) && <Style.Label>{label}</Style.Label>}
      <Style.InputContent>
        <Style.Input {...rest} $isWithIcon={isWithIcon} />
        {isWithIcon && (
          <Style.RightIcon
            name={iconName as string}
            $onPress={onPressIcon !== undefined}
          />
        )}
      </Style.InputContent>
    </Style.Container>
  );
};
