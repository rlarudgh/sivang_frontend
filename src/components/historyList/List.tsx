import styled from 'styled-components';
import { TransactionType } from '../../@types/transaction';
import { Plus, Minus, Garbage } from '../../assets';
import { useModal } from '../../hooks/useModal';

interface PropsType {
  transaction: TransactionType;
  type: '+' | '-';
}

const List = ({ transaction, type }: PropsType) => {
  const { openModal } = useModal();

  const onClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
  };

  return (
    <_Wrapper type={type} onClick={openModal}>
      <_LeftWrapper>
        <img onClick={onClick} src={type === '+' ? Plus : Minus} alt={type} />
        <_Text>{transaction.description}</_Text>
      </_LeftWrapper>
      <_RightWrapper>
        <_PriceText>{transaction.price}원</_PriceText>
        <_GarbageImage onClick={onClick} src={Garbage} alt="Garbage" />
      </_RightWrapper>
    </_Wrapper>
  );
};

export default List;

const _Wrapper = styled.div<{ type: '+' | '-' }>`
  width: 450px;
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ type, theme }) => (type === '+' ? theme.color.focus : theme.color.main01)};
  border-radius: 8px;
  margin-bottom: 20px;
  color: ${({ theme, type }) => (type === '+' ? theme.color.focus : theme.color.main01)};
  cursor: pointer;
  @keyframes sizeUp {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
  @keyframes sizeDown {
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: sizeDown 0.4s;
  :hover {
    animation: sizeUp 0.4s;
    animation-fill-mode: forwards;
  }
`;

const _Text = styled.span`
  width: 50%;
  ${({ theme }) => theme.font.body4};
  margin-left: 10px;
`;

const _GarbageImage = styled.img`
  cursor: pointer;
`;

const _PriceText = styled.span`
  ${({ theme }) => theme.font.body6};
`;

const _LeftWrapper = styled.div`
  width: 80%;
  display: flex;
`;

const _RightWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
