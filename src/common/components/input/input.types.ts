export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  iconName?: string;
  className?: string;
  label?: string;
  onPressIcon?: () => void;
}
