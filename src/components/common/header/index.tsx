import styled from "styled-components";
import { Logo } from "../../../assets";
import Button from "../button";

const Header = () => {
  return (
    <_Wrapper>
      <_LogoWrapper>
        <img src={Logo} alt="Logo Image" />
        <_LogoText>SIVANG</_LogoText>
      </_LogoWrapper>
      <_UpperWrapper>
        <_Text>자동 기록 추가</_Text>
        <_Text>돈 기록하기</_Text>
        <_Text>마이페이지</_Text>
      </_UpperWrapper>
      <Button color="main02">로그아웃</Button>
    </_Wrapper>
  );
};

export default Header;

const _Wrapper = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 2;
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

const _Text = styled.span`
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
`;

const _LogoText = styled.span`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.main02};
  text-align: center;
  margin-left: 5px;
`;
