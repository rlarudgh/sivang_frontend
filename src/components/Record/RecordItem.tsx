import styled from 'styled-components';
import { Plus, Minus } from '@/assets';

interface PropsType {
  id: number;
  title: string;
  type: string;
  amount: number;
}

const RecordItem = ({ title, type, amount }: PropsType) => {
  return (
    <_Wrapper>
      <img src={type === '+' ? Plus : Minus} alt="type" />
      <_Title>{title}</_Title>
      <_Amount type={type}>{amount}원</_Amount>
    </_Wrapper>
  );
};

export default RecordItem;

const _Wrapper = styled.li`
  width: 940px;
  height: 100px;
  list-style: none;
  background-color: ${({ theme }) => theme.color.background};
  margin-bottom: 30px;
  padding: 26px 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body3};
`;

const _Amount = styled.span<{ type: string }>`
  color: ${({ theme, type }) => (type === '+' ? theme.color.focus : theme.color.main01)};
`;
