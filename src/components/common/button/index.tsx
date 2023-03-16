import styled from "styled-components";
import { ReactNode } from "react";
import { color, keyOfColorType } from "../../../styles/theme/color";

interface PropsType {
  children: ReactNode;
  color: keyOfColorType;
  onClick?: (inner: any) => void;
}

const Button = ({ children, color, onClick }: PropsType) => {
  return (
    <_Wrapper onClick={onClick} buttonColor={color}>
      {children}
    </_Wrapper>
  );
};

export default Button;

const _Wrapper = styled.button<{ buttonColor: keyOfColorType }>`
  width: max-content;
  height: max-content;
  padding: 13px 64px;
  border-radius: 8px;
  border: 1px solid ${({ buttonColor }) => color[buttonColor]};
  color: ${({ buttonColor }) => color[buttonColor]};
  font-size: 20px;
  font-weight: 600;
  gap: 10px;
  font-family: "Noto Sans";
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.gray100};
    background-color: ${({ buttonColor }) => color[buttonColor]};
  }
`;
