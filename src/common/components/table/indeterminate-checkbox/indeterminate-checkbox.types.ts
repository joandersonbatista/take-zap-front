import { HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLInputElement> {
  indeterminate?: boolean;
}
