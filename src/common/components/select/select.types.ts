export interface SelectOption {
  label: string;
  value: string;
}

export interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  selectOptions: SelectOption[];
  selectedValue: string;
  leftIconName?: string;
  onChangeValue: (value: string) => void;
  openOnTop?: boolean;
  onlyIcon?: boolean;
  positionContent?: 'left' | 'right';
}
