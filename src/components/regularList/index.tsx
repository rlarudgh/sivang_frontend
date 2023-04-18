import styled from 'styled-components';
import { RegularType } from '@/types/regular';
import { Plus, Minus } from '@/assets';

const RegularList = ({ data }: { data: RegularType }) => {
  const { id, title, amount, periodic, type }: RegularType = data;

  return (
    <_Wrapper type={type}>
      <_Nav>
        <img src={type === '+' ? Plus : Minus} alt="type" />
        <_Title>{title}</_Title>
      </_Nav>
      <_Nav>
        <_Text type={type}>{periodic}일 주기</_Text>
        <_Text type={type}>{amount}원</_Text>
      </_Nav>
    </_Wrapper>
  );
};

export default RegularList;

const _Wrapper = styled.div<{ type: '+' | '-' }>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid ${({ theme, type }) => (type === '+' ? theme.color.focus : theme.color.main01)};
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

const _Text = styled.span<{ type: '+' | '-' }>`
  ${({ theme }) => theme.font.body6};
  color: ${props => (props.type === '+' ? props.theme.color.focus : props.theme.color.main01)};
`;
