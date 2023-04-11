import styled from 'styled-components';
import { useModal } from '../../hooks/useModal';
import { Minus } from '../../assets';
import { PaymentType } from '../../@types/modal';
import { useState, ChangeEvent, useEffect } from 'react';
import TextArea from '../common/textarea';

const ModifyItem = () => {
  const [information, setInformation] = useState<PaymentType>({
    id: 0,
    type: '+',
    title: '',
    content: '',
    cost: 0,
  });
  const [radio, setRadio] = useState<string>('입금');
  const { closeModal }: { closeModal: () => void } = useModal();
  const type: string[] = ['입금', '출금'];

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setInformation({
      ...information,
      [name]: value,
    });
  };

  useEffect(() => {
    setInformation({ ...information, type: radio === '입금' ? '+' : '-' });
  }, [radio]);

  return (
    <_Wrapper>
      <div>
        <_InnerWrapper>
          <_Image src={Minus} alt="type" onClick={closeModal} />
          <_Input placeholder="제목을 입력하세요" value={information.title} name="title" onChange={onChange} />
        </_InnerWrapper>
        <_Bar />
      </div>
      <div>
        <TextArea
          name="content"
          value={information.content}
          onChange={onChange}
          label="사유"
          placeholder="사유를 입력하세요."
        />
      </div>
      <div>
        <_InnerTitle>비용</_InnerTitle>
        <_CostItem>
          <_CostInput
            placeholder="9999999까지"
            value={information.cost === 0 ? '' : information.cost}
            name="cost"
            onChange={onChange}
          />
          <_Text>원</_Text>
        </_CostItem>
      </div>
      <_TypeWrapper>
        {type.map((value: string, idx: number) => (
          <_TypeItems key={idx}>
            <_Label>
              <_Radio
                key={idx}
                checked={value === radio}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setRadio(e.target.name)}
                type="radio"
                value={value}
                name={value}
              />
              <span>{value}</span>
            </_Label>
          </_TypeItems>
        ))}
      </_TypeWrapper>
    </_Wrapper>
  );
};

export default ModifyItem;

const _Wrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _InnerWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const _Image = styled.img`
  width: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

const _Bar = styled.hr`
  width: 250px;
  height: 1px;
  border: 1px solid ${({ theme }) => theme.color.main01};
  margin-top: 20px;
`;

const _InnerTitle = styled.p`
  ${({ theme }) => theme.font.body3};
  margin-bottom: 10px;
`;

const _Input = styled.input`
  width: 100%;
  ${({ theme }) => theme.font.body5};
  ::placeholder {
    ${({ theme }) => theme.font.body6};
  }
`;

const _TypeWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const _Text = styled.span`
  ${({ theme }) => theme.font.body5};
  color: ${({ theme }) => theme.color.black};
`;

const _TypeItems = styled.fieldset`
  display: flex;
`;

const _CostItem = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const _CostInput = styled.input`
  width: 80px;
  ${({ theme }) => theme.font.body5};
  ::placeholder {
    ${({ theme }) => theme.font.body6};
  }
`;

const _Radio = styled.input`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
  border: max(2px, 0.1em) solid gray;
  :checked {
    border: 4px solid ${({ theme }) => theme.color.main01};
  }
  :disabled {
    opacity: 0.7;
  }
  transition: border 0.5s ease-in-out;
  :focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) dotted ${({ theme }) => theme.color.main01};
  }
  cursor: pointer;
  border-radius: 50%;
`;

const _Label = styled.label`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.font.body5};
  cursor: pointer;
`;
