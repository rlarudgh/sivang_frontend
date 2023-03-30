import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { modalState } from '../utils/atom';

interface ReturnType {
  openModal: () => void;
  closeModal: () => void;
}

type voidFunc = () => void;

export const useModal = (): ReturnType => {
  const setModalState: SetterOrUpdater<boolean> = useSetRecoilState<boolean>(modalState);

  const openModal: voidFunc = () => {
    setModalState(true);
  };

  const closeModal: voidFunc = () => {
    setModalState(false);
  };

  return {
    openModal,
    closeModal,
  };
};
