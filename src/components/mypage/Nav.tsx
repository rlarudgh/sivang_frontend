import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getProfile } from '@/apis/mypage';
import { AxiosError } from 'axios';

interface InformationType {
  id: number;
  email: string;
  name: string;
  createAt: string;
  moneys: [];
}

const MyPageNav = () => {
  const [information, setInformation] = useState<InformationType>({
    id: 0,
    email: '기본',
    name: '기본',
    createAt: '기본',
    moneys: [],
  });

  const setCreateAt = (date: string) => {
    let [year, month, day] = date.split('-');
    day = day.substring(0, 2);
    setInformation(prev => ({ ...prev, createAt: `${year}.${month}.${day}` }));
  };
  
  useEffect(() => {
    getProfile()
      .then(({ data }) => {
        setInformation(prev => ({ ...prev, ...data.profile }));
        setCreateAt(data.profile.createAt);
      })
      .catch((err: AxiosError) => console.error(err));
  }, []);

  return (
    <_ItemWrapper>
      <_InformationWrapper>
        <_InformationNav>
          <_SubWrapper>
            <_SubInformation>
              <_SubTitle>이메일</_SubTitle>
              <_SubInformationText>{information.email}</_SubInformationText>
            </_SubInformation>
            <_SubInformation>
              <_SubTitle>가입 날짜</_SubTitle>
              <_SubInformationText>{information.createAt}</_SubInformationText>
            </_SubInformation>
            <_SubInformation>
              <_SubTitle>자동 등록 수</_SubTitle>
              <_SubInformationText>{information.moneys.length}개</_SubInformationText>
            </_SubInformation>
          </_SubWrapper>
        </_InformationNav>
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
