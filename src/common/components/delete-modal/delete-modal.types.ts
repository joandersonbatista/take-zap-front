export interface Props {
  title: string;
  message: string;
  show: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
