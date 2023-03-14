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
      <span>{children}</span>
    </_Wrapper>
  );
};

export default Button;

const _Wrapper = styled.button<{ buttonColor: keyOfColorType }>`
  padding: 13px 64px;
  border-radius: 8px;
  border: 1px solid ${({ buttonColor }) => color[buttonColor]};
  color: ${({ buttonColor }) => color[buttonColor]};
  font-size: 20px;
  font-weight: bold;
  flex: none;
  font-family: "Inter";
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.color.gray100};
    background-color: ${({ buttonColor }) => color[buttonColor]};
  }
`;
