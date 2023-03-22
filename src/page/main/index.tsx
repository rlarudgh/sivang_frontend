import Header from '../../components/common/header';
import styled from 'styled-components';
import { MainBackground } from '../../assets';
import Button from '../../components/common/button';
import HistoryList from '../../components/historyList';
import { TransactionDummy } from '../../constance/purchase';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../utils/atom';
import DetailModal from '../../components/modal/Detail';

const MainPage = () => {
  const modal = useRecoilValue(modalState);
  const onClick = () => {
    window.location.href = '/write';
  };

  return (
    <_Wrapper>
      <Header />
      <_ItemWrapper>
        <_IntroduceWrapper>
          <_TextWrapper>
            <p>
              이번 달 <strong>김경호</strong>님이
            </p>
            <strong>수입/지출 합친 돈은 </strong>
            <strong>1000원입니다.</strong>
          </_TextWrapper>
          <Button onClick={onClick} color="main03">
            기록 작성
          </Button>
        </_IntroduceWrapper>
      </_ItemWrapper>
      <_HistoryWrapper>
        <HistoryList transaction={TransactionDummy} type={'+'} />
        <HistoryList transaction={TransactionDummy} type={'-'} />
      </_HistoryWrapper>
      {modal && <DetailModal />}
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
