import { useState } from "react";
import styled from "styled-components";
import { Logo, LoginImage } from "../../assets";
import { LoginType } from "../../types/login";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import SignUpModal from "../../components/modal/SignUp";
import { useModal } from '../../hooks/useModal';
import { useRecoilValue } from "recoil";
import { modalState } from "../../utils/atom";

const LoginPage = () => {
  const [information, setInformation] = useState<LoginType>({
    id: "",
    password: "",
  });
  const { openModal, closeModal } = useModal();
  const modal = useRecoilValue(modalState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInformation({ ...information, [name]: value });
  };

  return (
    <_Wrapper>
      <_BackgroundWrapper>
        <_LogoWrapper>
          <img src={Logo} alt="Logo" />
          <_LogoText>SIVANG</_LogoText>
        </_LogoWrapper>
        <_PromotionWrapper>
          <_Promotion>저축하여</_Promotion>
          <_Promotion>더 큰 목표를</_Promotion>
          <_Promotion>이루어봐요 !</_Promotion>
        </_PromotionWrapper>
        <_LoginImage src={LoginImage} alt="Login Image" />
      </_BackgroundWrapper>
      <_LoginWrapper>
        <_InnerWrapper>
          <_Text>
            <_Title>SIVANG</_Title>
            로그인
          </_Text>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            onChange={onChange}
            value={information.id}
            name="id"
            text="아이디"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={onChange}
            value={information.password}
            name="password"
            text="비밀번호"
          />
          <_SignUpText>
            아직 계정이 없으신가요?
            <_SignUpButton onClick={openModal}>회원가입</_SignUpButton>
          </_SignUpText>
          <Button color="main02">로그인</Button>
        </_InnerWrapper>
      </_LoginWrapper>
      {modal && <SignUpModal />}
    </_Wrapper>
  );
};

export default LoginPage;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const _BackgroundWrapper = styled.nav`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.main03};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 20%;
  right: 20%;
`;

const _LogoText = styled.span`
  font-size: 48px;
  font-family: "Noto Sans";
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray800};
  text-align: center;
  margin-left: 10px;
`;

const _LoginWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _InnerWrapper = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.main01};
  margin-right: 10px;
`;

const _Text = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.black};
`;

const _SignUpText = styled.p`
  ${({ theme }) => theme.font.body6};
  color: ${({ theme }) => theme.color.black};
`;

const _SignUpButton = styled.span`
  ${({ theme }) => theme.font.body6};
  cursor: pointer;
  color: ${({ theme }) => theme.color.main01};
  margin-left: 12px;
  :hover {
    text-decoration: underline;
  }
`;

const _PromotionWrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 30%;
`;

const _Promotion = styled.p`
  font-weight: bold;
  font-size: 36px;
  font-family: "Noto Sans";
  color: ${({ theme }) => theme.color.main02};
`;

const _LoginImage = styled.img`
  width: 200px;
  position: relative;
  right: 30%;
  top: 35%;
`;
