import styled from 'styled-components';

const Introduce = () => {
  return (
    <_Introduce>
      <_IntroduceWrapper>
        <_IntroduceText>김경호 님의</_IntroduceText>
        <_IntroduceText>오늘 저축 및 사용 하신 돈은</_IntroduceText>
        <_IntroduceText>1,000원 입니다. </_IntroduceText>
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
