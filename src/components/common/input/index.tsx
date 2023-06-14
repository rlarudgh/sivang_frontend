import styled from 'styled-components';
import { useState, useRef } from 'react';

interface PropsType {
  text: string;
  type?: 'text' | 'password';
  name?: string;
  placeholder: string;
  value?: string;
  error?: boolean;
  errorMsg?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?(e: React.KeyboardEvent<HTMLInputElement>): void;
}

const Input = ({ text, type, name, placeholder, value, error, errorMsg, onChange, onKeyPress }: PropsType) => {
  const [clickState, setClickState] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <_Wrapper>
      <_UpperText>{text}</_UpperText>
      <_InputWrapper error={error} clickState={clickState}>
        <_Input
          ref={ref}
          type={type}
          name={name}
          placeholder={clickState ? '' : placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          onKeyPress={onKeyPress}
          onFocus={() => setClickState(true)}
          onBlur={() => setClickState(value ? true : false)}
        />
      </_InputWrapper>
    </_Wrapper>
  );
};

export default Input;

const _Wrapper = styled.div`
  width: 500px;
`;

const _UpperText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.main02};
`;

const _InputWrapper = styled.div<{ clickState: boolean; error?: boolean }>`
  width: 100%;
  padding: 20px 10px;
  border-radius: 13px;
  border: 1px solid ${({ theme, clickState }) => (clickState ? theme.color.main02 : theme.color.gray600)};
  :focus-within {
    border: 1px solid ${({ theme, error }) => (error ? theme.color.error : theme.color.main02)};
  }
`;

const _Input = styled.input`
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.color.main02};
  font-size: 18px;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray600};
  }
`;
