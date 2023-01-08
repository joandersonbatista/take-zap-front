import { FunctionComponent } from 'react';

import { Icon } from '@/common/components/icon/icon';

import * as Style from './icon-button.styles';
import type { Props } from './icon-button.types';

export const IconButton: FunctionComponent<Props> = ({
  onPress,
  className,
  ...rest
}) => {
  return (
    <Style.Button className={className}>
      <Icon {...rest} />
    </Style.Button>
  );
};
