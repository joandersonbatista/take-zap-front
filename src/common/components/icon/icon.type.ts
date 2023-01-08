import { FunctionComponent } from 'react';

export type IconClass = Record<string, FunctionComponent>;

export interface Props {
  name: string;
  className?: string;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}
