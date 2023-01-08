export interface ContactData {
  id: string;
  info: {
    profileUrl: string;
    name: string;
  };
  number: string;
  block: string;
  createdAt: string;
}

export interface ContainerProps {
  show: boolean;
  contact?: ContactData;
  onPressOut: () => void;
}

export interface Props extends ContainerProps {
  showSearcheSequence: boolean;
  goToSendMessage: () => void;
  handleCloseSearchSequence: () => void;
  handleOpenSearchSequence: () => void;
}
