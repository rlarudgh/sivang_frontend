import styled from 'styled-components';
import Header from '@/components/common/header';
import RegularList from '@/components/regularList';
import { useState, useEffect } from 'react';
import { getPostList } from '@/apis/getPostList';
import { AxiosError } from 'axios';

interface ListType {
  amount: number;
  auto: boolean;
  description: string;
  id: number;
  regularWeek: number;
  title: string;
  type: boolean;
}

const RegularPage = () => {
  const [data, setData] = useState<ListType[]>([]);

  useEffect(() => {
    getPostList()
      .then(res => {
        const { data } = res;
        const { moneyPostList } = data;
        const value: ListType[] = [];

        for (const item of moneyPostList) {
          console.log(item.auto);
          if (item.auto) {
            value.push(item);
          }
        }
        setData(value);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }, []);

  return (
    <_Wrapper>
      <Header />
      <_InnerWrapper>
        <_RegularWrapper>
          <_TopWrapper>
            <_Title>등록한 규칙적인 기록들 📝</_Title>
          </_TopWrapper>
          <_ListWrapper>
            {data.map((item: ListType) => {
              if (item.regularWeek > 0) return <RegularList key={item.id} data={item} />;
            })}
          </_ListWrapper>
        </_RegularWrapper>
      </_InnerWrapper>
    </_Wrapper>
  );
};

export default RegularPage;

const _Wrapper = styled.body`
  width: 100vw;
  height: 100vh;
`;

const _RegularWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

const _Title = styled.h2`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title3};
`;

const _TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const _InnerWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const _ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.gray100};
  justify-content: space-around;
  margin-top: 10px;
`;
