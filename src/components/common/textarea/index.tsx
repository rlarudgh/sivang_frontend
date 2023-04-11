import styled from 'styled-components';
import { TextAreaType } from '@/@types/textarea';

const TextArea = ({ name, value, onChange, label, placeholder }: TextAreaType) => {
  return (
    <_Wrapper>
      <_Text>{label}</_Text>
      <_TextArea name={name} value={value} onChange={onChange} placeholder={placeholder} />
      <_CountText>{value.length}/2000</_CountText>
    </_Wrapper>
  );
};

export default TextArea;

const _Wrapper = styled.div`
  width: 100%;
`;

const _TextArea = styled.textarea`
  width: 100%;
  height: 194px;
  border-radius: 8px;
  resize: none;
  ${({ theme }) => theme.font.body4};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }
`;

const _Text = styled.p`
  ${({ theme }) => theme.font.body3};
  margin-bottom: 10px;
`;

const _CountText = styled.p`
  ${({ theme }) => theme.font.body6};
`;
