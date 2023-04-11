import styled from 'styled-components';
import { useState, useRef } from 'react';
import { TextFieldType } from '@/@types/text';

const TextField = ({ type, name, placeholder, value, error, errorMsg, onChange, width, height }: TextFieldType) => {
  const [inputClick, setInputClick] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    setInputClick(true);
  };

  const onBlur = () => {
    setInputClick(value ? true : false);
  };

  return (
    <_Wrapper width={width} height={height}>
      <_InputWrapper error={error} value={value}>
        <_Input
          ref={ref}
          type={type}
          name={name}
          placeholder={inputClick ? '' : placeholder}
          value={value}
          onChange={onChange}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </_InputWrapper>
      {error && <_ErrorText>{errorMsg}</_ErrorText>}
    </_Wrapper>
  );
};

export default TextField;

const _Wrapper = styled.div<{ width?: number; height?: number }>`
  ${({ width = 554, height = 40 }) => `
    width: ${width <= 100 ? `${width}%` : `${width}px`};
    height: ${height <= 100 ? `${height}%` : `${height}px`};
  `}
`;

const _InputWrapper = styled.div<{ error?: boolean; value?: string | number }>`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 6px 8px;
  border-bottom: 1px solid
    ${({ theme, value, error }) => (error ? theme.color.error : value ? theme.color.main02 : theme.color.gray400)};
  display: flex;
  align-items: center;
  :focus-within {
    border-bottom: 1px solid ${({ theme, error }) => (error ? theme.color.error : theme.color.main02)};
  }
`;

const _Input = styled.input`
  width: 100%;
  height: 28px;
  background: transparent;
  color: ${({ theme }) => theme.color.gray900};
  ${({ theme }) => theme.font.body2};
  line-height: 32px;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray300};
    ${({ theme }) => theme.font.body2};
    line-height: 32px;
  }
`;

const _ErrorText = styled.span`
  ${({ theme }) => theme.font.body6};
  color: ${({ theme }) => theme.color.error};
  line-height: 22px;
`;
