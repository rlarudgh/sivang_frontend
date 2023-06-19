import styled from 'styled-components';
import { RegularType } from '@/types/regular';
import { Plus, Minus } from '@/assets';

interface StyledType {
  type: boolean;
}

interface ListType {
  amount: number;
  auto: boolean;
  description: string;
  id: number;
  regularWeek: number;
  title: string;
  type: boolean;
}

const RegularList = ({ data }: { data: ListType }) => {
  return (
    <_Wrapper type={data.type}>
      <_Nav>
        <img src={data.type ? Plus : Minus} alt="type" />
        <_Title>{data.title}</_Title>
      </_Nav>
      <_Nav>
        <_Text type={data.type}>{data.regularWeek}주</_Text>
        <_Text type={data.type}>{data.amount}원</_Text>
      </_Nav>
    </_Wrapper>
  );
};

export default RegularList;

const _Wrapper = styled.div<StyledType>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme, type }) => (type ? theme.color.focus : theme.color.main01)};
`;

const _Nav = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;

const _Text = styled.span<StyledType>`
  ${({ theme }) => theme.font.body6};
  color: ${props => (props.type ? props.theme.color.focus : props.theme.color.main01)};
`;
