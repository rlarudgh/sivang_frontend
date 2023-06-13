import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProfile } from '@/apis/mypage';

interface DataType {
  name: string;
  amountSum: number;
}

const Introduce = () => {
  const [data, setData] = useState<DataType>({
    name: '',
    amountSum: 0,
  });

  useEffect(() => {
    getProfile()
      .then(({ data }) => {
        const { profile } = data;
        const name: string = profile.name;
        const { moneys } = profile;
        let sum = 0;

        for (const { amount } of moneys) {
          sum += amount;
        }

        setData({ name, amountSum: sum });
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return (
    <_Introduce>
      <_IntroduceWrapper>
        <_IntroduceText>{data.name} 님의</_IntroduceText>
        <_IntroduceText>오늘 저축 및 사용 하신 돈은</_IntroduceText>
        <_IntroduceText>{data.amountSum.toLocaleString()}원 입니다. </_IntroduceText>
      </_IntroduceWrapper>
    </_Introduce>
  );
};

export default Introduce;

const _Introduce = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _IntroduceWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const _IntroduceText = styled.p`
  width: 100%;
  ${({ theme }) => theme.font.body3};
`;
