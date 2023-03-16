import styled from "styled-components";
import { TransactionType } from "../../types/transaction/index";
import List from "./List";

export interface PropsType {
  transaction: TransactionType[];
  type: "+" | "-";
}

const HistoryList = ({ transaction, type }: PropsType) => {
  return (
    <_Wrapper>
      {transaction.map((element: TransactionType, index: number) => {
        if (index < 8) {
          return <List key={element.id} transaction={element} type={type} />;
        }
      })}
    </_Wrapper>
  );
};

export default HistoryList;

const _Wrapper = styled.div`
  width: 500px;
  min-height: 500px;
  border: 1px solid ${({ theme }) => theme.color.gray600};
  padding: 25px;
  box-shadow: (0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
