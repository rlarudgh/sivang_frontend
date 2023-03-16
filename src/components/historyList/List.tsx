import styled from "styled-components";
import { TransactionType } from "../../types/transaction";
import { useState, useEffect } from "react";
import { Plus, Minus, Garbage } from "../../assets";

interface PropsType {
  transaction: TransactionType;
  type: "+" | "-";
}

const List = ({ transaction, type }: PropsType) => {
  return (
    <_Wrapper type={type}>
      <_LeftWrapper>
        <img src={type === "+" ? Plus : Minus} alt={type} />
        <_Text>{transaction.description}</_Text>
      </_LeftWrapper>
      <_RightWrapper>
        <_PriceText>{transaction.price}원</_PriceText>
        <_GarbageImage src={Garbage} alt="Garbage" />
      </_RightWrapper>
    </_Wrapper>
  );
};

export default List;

const _Wrapper = styled.div<{ type: "+" | "-" }>`
  width: 450px;
  padding: 0 20px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid
    ${({ type, theme }) =>
      type === "+" ? theme.color.focus : theme.color.main01};
  border-radius: 8px;
  margin-bottom: 20px;
  color: ${({ theme, type }) =>
    type === "+" ? theme.color.focus : theme.color.main01};
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
