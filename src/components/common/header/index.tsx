import styled from 'styled-components';
import { Logo } from '@/assets/index';
import Button from '../button';
import { Link } from 'react-router-dom';

const Header = () => {
  const onClick = () => {
    window.location.href = '/main';
  };

  return (
    <_Wrapper>
      <_LogoWrapper onClick={onClick}>
        <img src={Logo} alt="Logo Image" />
        <_LogoText>SIVANG</_LogoText>
      </_LogoWrapper>
      <_UpperWrapper>
        <_Text to="/regular">규칙적인 기록</_Text>
        <_Text to="/record">작성 기록</_Text>
        <_Text to="/mypage">마이페이지</_Text>
      </_UpperWrapper>
      <Button color="main02">로그아웃</Button>
    </_Wrapper>
  );
};

export default Header;

const _Wrapper = styled.header`
  width: 100vw;
  height: 80px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
  @media screen and (max-width: 900px) {
    background-color: ${({ theme }) => theme.color.main04};
    height: 100vh;
  }
`;

const _UpperWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;

const _Text = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  ${({ theme }) => theme.font.body4};
  :hover {
    text-decoration: underline;
  }
`;

const _LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const _LogoText = styled.span`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.main02};
  text-align: center;
  margin-left: 5px;
`;
