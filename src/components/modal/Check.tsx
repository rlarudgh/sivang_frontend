import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import { Minus } from '@/assets';
import { PaymentDummy } from '@/constants/payment';

const CheckItem = () => {
  const { closeModal } = useModal();

  return (
    <_Wrapper>
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
    </_Wrapper>
  );
};

export default CheckItem;

const _Wrapper = styled.div`
  width: 100%;
  height: 70%;
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
