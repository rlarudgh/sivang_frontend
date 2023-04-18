import styled from 'styled-components';
import Header from '@/components/common/header';

const RecordPage = () => {
  return (
    <_Wrapper>
      <Header />
      <span>Record Page</span>
    </_Wrapper>
  );
};

export default RecordPage;

const _Wrapper = styled.body`
  width: 100vw;
  height: 100vh;
`;

const _ListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
