export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  buttonType?: ButtonTypes;
  iconName?: string;
}

export interface ButtonPropsStyles {
  $type: ButtonTypes;
  $disabled: boolean;
}

export enum ButtonTypes {
  default = 'DEFAULT',
  outline = 'OUTLINE',
  danger = 'DANGER',
  tertiary = 'TERTIARY',
}
