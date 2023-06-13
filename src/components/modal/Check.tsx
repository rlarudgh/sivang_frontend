import styled from 'styled-components';
import { useModal } from '@/hooks/useModal';
import { Minus } from '@/assets';
import { PaymentDummy } from '@/constants/payment';
import { getCookie } from '@/utils/cookie';
import { getPost } from '@/apis/getPost';
import { useEffect, useState } from 'react';
import { customToast } from '@/utils/toast';

interface PaymentType {
  id: number;
  title: string;
  amount: number;
  createAt: string;
  type: boolean;
  description: string;
  userId: number;
  auto: boolean;
  regularWeek: number;
}

const CheckItem = () => {
  const { closeModal } = useModal();
  const [payment, setPayment] = useState<PaymentType>({
    id: 0,
    title: '',
    amount: 0,
    createAt: '',
    type: false,
    description: '',
    userId: 0,
    auto: false,
    regularWeek: 0,
  });

  useEffect(() => {
    getPost(getCookie('id'))
      .then(res => {
        setPayment(res.data.moneyPost);
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });
  }, []);

  return (
    <_Wrapper>
      <div>
        <_InnerWrapper>
          <_Image src={Minus} alt="type" onClick={closeModal} />
          <_Title>{payment.title}</_Title>
        </_InnerWrapper>
        <_Bar />
      </div>
      <div>
        <_InnerTitle>사유</_InnerTitle>
        <_Text>{payment.description}</_Text>
      </div>
      <div>
        <_InnerTitle>비용</_InnerTitle>
        <_Text>{payment.amount}원</_Text>
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
