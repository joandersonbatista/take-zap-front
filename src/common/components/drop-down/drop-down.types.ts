export interface SelectOption {
  label: string;
  onClick: () => void;
}

export interface Props {
  selectOptions: SelectOption[];
  placeHolder?: string;
  className?: string;
  openOnTop?: boolean;
  disabled?: boolean;
}
