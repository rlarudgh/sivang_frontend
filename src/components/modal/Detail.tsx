import styled from "styled-components";
import { useModal } from "../../hooks/useModal";
import { Minus } from "../../assets";
import Button from "../common/button";
import { PaymentDummy } from "../../constance/payment";

const DetailModal = () => {
  const { closeModal } = useModal();

  return (
    <_Wrapper onClick={closeModal}>
      <_Modal
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.stopPropagation()
        }
      >
        <_ItemWrapper>
          <div>
            <_InnerWrapper>
              <_Image src={Minus} alt="type" onClick={closeModal} />
              <_Title>{PaymentDummy.title}</_Title>
            </_InnerWrapper>
            <_Bar />
          </div>
          <div>
            <_InnerTitle>사유</_InnerTitle>
            <_Text>{PaymentDummy.content}</_Text>
          </div>
          <div>
            <_InnerTitle>비용</_InnerTitle>
            <_Text>{PaymentDummy.cost}원</_Text>
          </div>
          <_ButtonWrapper>
            <Button color="main02">수정</Button>
            <Button color="main01">확인</Button>
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

const _InnerWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const _Image = styled.img`
  width: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.main01};
`;

const _Bar = styled.hr`
  width: 250px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.color.main01};
  margin-top: 20px;
`;

const _InnerTitle = styled.p`
  ${({ theme }) => theme.font.body3};
`;

const _Text = styled.span`
  width: 100%;
  ${({ theme }) => theme.font.body6};
  color: ${({ theme }) => theme.color.black};
  line-height: 48px;
`;

const _ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
