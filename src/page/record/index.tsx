import styled from 'styled-components';
import Header from '@/components/common/header';
import RecordItem from '@/components/Record/RecordItem';
import { RecordDummy } from '@/constants/record';

const RecordPage = () => {
  return (
    <_Wrapper>
      <Header />
      <_ListWrapper>
        <_Title>작성 기록들 ✍🏻</_Title>
        <_RecordItemWrapper>
          {RecordDummy.map((element) => (
            <RecordItem key={element.id} {...element}/>
          ))}
        </_RecordItemWrapper>
      </_ListWrapper>
    </_Wrapper>
  );
};

export default RecordPage;

const _Wrapper = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _ListWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-top: 130px;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 12px;
`;

const _RecordItemWrapper = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: column;

`;
