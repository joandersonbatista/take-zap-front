export interface ContainerProps {
  show: boolean;
  onPressOut: () => void;
}

export interface Props extends ContainerProps {
  onSaveContact: () => void;
}
