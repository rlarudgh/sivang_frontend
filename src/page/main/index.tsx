import Header from '@/components/common/header';
import styled from 'styled-components';
import { MainBackground } from '@/assets';
import Button from '@/components/common/button';
import HistoryList from '@/components/historyList';
import { useRecoilValue } from 'recoil';
import { modalState } from '@/utils/atom';
import DetailModal from '@/components/modal/Detail';
import { useEffect, useState } from 'react';
import { customToast } from '@/utils/toast';
import { getProfile } from '@/apis/mypage';
import { getPostList } from '@/apis/getPostList';

interface ListType {
  amount: number;
  auto: boolean;
  description: string;
  id: number;
  regularWeek: number;
  title: string;
  type: boolean;
}

const MainPage = () => {
  const modal = useRecoilValue(modalState);
  const [name, setName] = useState<string>('');
  const [plusMoneyList, setPlusMoneyList] = useState<ListType[]>([]);
  const [minusMoneyList, setMinusMoneyList] = useState<ListType[]>([]);
  const [reload, setReload] = useState<number>(0);

  const onClick = () => {
    window.location.href = '/write';
  };

  useEffect(() => {
    if (document.referrer === 'http://localhost:3000/') {
      customToast('로그인 성공!', 'success');
    }

    getProfile().then(res => {
      console.log(res);
      setName(res.data.profile.name);
    });

    getPostList()
      .then(res => {
        const { data } = res;
        const { moneyPostList } = data;

        setPlusMoneyList([]);
        setMinusMoneyList([]);

        for (const info of moneyPostList) {
          if (info.type) {
            setPlusMoneyList(prev => [...prev, info]);
          } else {
            setMinusMoneyList(prev => [...prev, info]);
          }
        }
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, [reload]);

  return (
    <_Wrapper>
      <Header />
      <_ItemWrapper>
        <_IntroduceWrapper>
          <_TextWrapper>
            <p>
              이번 달 <strong>{name}</strong>님이
            </p>
            <_Strong>오늘도</_Strong>
            <_Strong>돈 절약해봐요!</_Strong>
          </_TextWrapper>
          <Button onClick={onClick} color="main03">
            기록 작성
          </Button>
        </_IntroduceWrapper>
      </_ItemWrapper>
      <_HistoryWrapper>
        <HistoryList transaction={plusMoneyList} type={'+'} />
        <HistoryList transaction={minusMoneyList} type={'-'} />
      </_HistoryWrapper>
      {modal && <DetailModal setReload={setReload} />}
    </_Wrapper>
  );
};

export default MainPage;

const _Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const _ItemWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MainBackground});
  background-position: center;
  z-index: 1;
`;

const _IntroduceWrapper = styled.div`
  height: 50%;
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.white};
  line-height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _TextWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const _HistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 60px 0;
`;

const _Strong = styled.strong`
  ${({ theme }) => theme.font.title3};
`;
