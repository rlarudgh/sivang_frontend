import { useSetRecoilState } from "recoil";
import { modalState } from "../utils/atom";

export const useModal = () => {
  const setModalState = useSetRecoilState(modalState);

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  return {
    openModal,
    closeModal,
  };
};
