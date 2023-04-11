export interface ModalType {
  setModal: (modal: boolean) => void;
}

export interface PaymentType {
  id: number;
  type: "+" | "-";
  title: string;
  content: string;
  cost: number;
}
