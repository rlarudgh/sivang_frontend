import styled from 'styled-components';
import { Message, Logo, Github } from '@/assets';

const Footer = () => {
  const job: string[] = ['Frontend', 'Backend', 'Design'];
  return (
    <_Wrapper>
      <_JobItems>
        {job.map((value: string, index: number) => (
          <_JobWrapper key={index}>
            <_Title>{value}</_Title>
            <_Name href="https://github.com/kimkh05">김경호</_Name>
          </_JobWrapper>
        ))}
      </_JobItems>
      <_ConnectWrapper>
        <_LogoWrapper>
          <_Logo src={Logo} alt="Logo" />
          <_LogoText>SIVANG</_LogoText>
        </_LogoWrapper>
        <_LinkWrapper>
          <_LinkItem>
            <img src={Message} alt="이메일" />
            <_Link>nestjs01@naver.com</_Link>
          </_LinkItem>
          <_LinkItem>
            <img src={Github} alt="Github" />
            <_Link href="https://github.com/kimkh05/sivang_frontend">Sivang_Frontend</_Link>
          </_LinkItem>
          <_LinkItem>
            <img src={Github} alt="Github" />
            <_Link href="https://github.com/kimkh05/sivang_backend">Sivang_Backend</_Link>
          </_LinkItem>
        </_LinkWrapper>
      </_ConnectWrapper>
    </_Wrapper>
  );
};

export default Footer;

const _Wrapper = styled.footer`
  width: 100vw;
  height: 300px;
  background-color: ${({ theme }) => theme.color.main03};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
`;

const _JobItems = styled.div`
  width: 30%;
  height: 20%;
  display: flex;
  justify-content: space-between;
`;

const _JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const _Name = styled.a`
  text-decoration: none;
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const _LinkWrapper = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _ConnectWrapper = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-end;
`;

const _Link = styled.a`
  ${({ theme }) => theme.font.body6};
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  :hover {
    text-decoration: underline;
  }
`;

const _LinkItem = styled.div`
  display: flex;
  align-items: center;
`;

const _Logo = styled.img`
  width: 50px;
`;

const _LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _LogoText = styled.span`
  color: ${({ theme }) => theme.color.main02};
  ${({ theme }) => theme.font.title1};
`;
