import styled from 'styled-components';
import { MyPageListType } from '../../types/mypage';

interface PropsType {
  information: MyPageListType;
}

const MyPageNav = ({ information }: PropsType) => {
  const { email, join, autoPost, totalUse, totalSave }: MyPageListType = information;

  return (
    <_ItemWrapper>
      <_InformationWrapper>
        <_InformationNav>
          <_SubWrapper>
            <_SubInformation>
              <_SubTitle>이메일</_SubTitle>
              <_SubInformationText>{email}</_SubInformationText>
            </_SubInformation>
            <_SubInformation>
              <_SubTitle>가입 날짜</_SubTitle>
              <_SubInformationText>{join}</_SubInformationText>
            </_SubInformation>
            <_SubInformation>
              <_SubTitle>자동 등록 수</_SubTitle>
              <_SubInformationText>{autoPost}개</_SubInformationText>
            </_SubInformation>
          </_SubWrapper>
        </_InformationNav>
        <_UseWrapper>
          <_SubWrapper>
            <_SubInformation>
              <_SubTitle>총 돈 사용 횟수</_SubTitle>
              <_SubInformationText>{totalUse}번</_SubInformationText>
            </_SubInformation>
            <_SubInformation>
              <_SubTitle>총 저축 횟수</_SubTitle>
              <_SubInformationText>{totalSave}번</_SubInformationText>
            </_SubInformation>
          </_SubWrapper>
        </_UseWrapper>
      </_InformationWrapper>
    </_ItemWrapper>
  );
};

export default MyPageNav;

const _ItemWrapper = styled.div`
  width: 100%;
  height: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _InformationWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-around;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;

const _SubTitle = styled(_Title)`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.main01};
`;

const _SubWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _SubInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const _SubInformationText = styled.span`
  margin-top: 10px;
`;

const _InformationNav = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _UseWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
