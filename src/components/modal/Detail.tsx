import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import Button from "../common/button";
import { useState, useEffect } from "react";
import CheckItem from "./Check";
import ModifyItem from "./Modify";

const DetailModal = () => {
  const { closeModal }: { closeModal: () => void } = useModal();
  const [modify, setModify] = useState<boolean>(false);

  const onClick = () => {
    setModify(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <_Wrapper onClick={closeModal}>
      <_Modal
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        <_ItemWrapper>
          {modify ? <ModifyItem /> : <CheckItem />}
          <_ButtonWrapper>
            {!modify && (
              <Button onClick={onClick} color="main02">
                수정
              </Button>
            )}
            <Button onClick={closeModal} color="main01">
              확인
            </Button>
          </_ButtonWrapper>
        </_ItemWrapper>
      </_Modal>
    </_Wrapper>
  );
};

export default DetailModal;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const _Modal = styled.div`
  width: 40%;
  height: 85%;
  background: ${({ theme }) => theme.color.background};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const _ItemWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
