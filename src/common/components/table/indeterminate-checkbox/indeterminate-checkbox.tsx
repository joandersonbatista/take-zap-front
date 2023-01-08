import { FunctionComponent, MutableRefObject, useEffect, useRef } from 'react';

import * as Style from './indeterminate-checkbox.styles';
import type { Props } from './indeterminate-checkbox.types';

export const IndeterminateCheckbox: FunctionComponent<Props> = ({
  indeterminate,
  ...rest
}) => {
  const ref = useRef<HTMLInputElement>(
    null
  ) as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = rest.checked === false && indeterminate;
    }
  }, [ref, indeterminate]);

  return <Style.SelectInput ref={ref} {...(rest as any)} />;
};
