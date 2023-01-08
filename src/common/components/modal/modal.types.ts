import { MouseEvent, ReactNode } from 'react';

export type MouseEventHandler = MouseEvent<
  HTMLDivElement,
  globalThis.MouseEvent
>;

export interface Props {
  show: boolean;
  children: ReactNode;
  className?: string;
  onPressOut: () => void;
}
