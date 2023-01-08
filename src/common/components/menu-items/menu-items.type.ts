export interface MenuItem {
  label: string;
  icon: string;
  order: number;
  screenName: string;
  onBottom?: boolean;
}

export interface StyledInterface {
  $isActiveRoute: boolean;
  $isOpen: boolean;
}
