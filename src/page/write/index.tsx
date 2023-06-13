import Header from '@/components/common/header';
import styled from 'styled-components';
import TextField from '@/components/common/text';
import { useState, ChangeEvent, MouseEvent } from 'react';
import { PrepareType } from '@/types/prepare';
import { Plus, Minus } from '@/assets';
import TextArea from '@/components/common/textarea';
import Button from '@/components/common/button';
import { makeMoney } from '@/apis/makeMoney';
import { customToast } from '@/utils/toast';

const WritePage = () => {
  const [prepare, setPrepare] = useState<PrepareType>({
    title: '',
    content: '',
    type: '+',
    cost: 0,
    regular: 0,
  });
  const [radio, setRadio] = useState<string>('수입');
  const type: string[] = ['수입', '지출'];

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPrepare({ ...prepare, [name]: value });
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeMoney({
      title: prepare.title,
      content: prepare.content,
      type: radio === '수입' ? true : false,
      cost: Number(prepare.cost),
      regularWeek: Number(prepare.regular),
      auto: prepare.regular === 0 ? false : true,
    })
      .then(res => {
        const prevPath: string = document.referrer;
        window.location.href = prevPath;
      })
      .catch((error: unknown) => {
        console.error(error);
        customToast('내용을 잘 확인해주세요.', 'error');
      });
  };

  return (
    <_Wrapper>
      <Header />
      <_Section>
        <_Article>
          <_WriteWrapper>
            <div>
              <_Title>제목</_Title>
              <TextField placeholder="제목을 입력하세요" value={prepare.title} name="title" onChange={onChange} />
            </div>
            <div>
              <TextArea
                name="content"
                value={prepare.content}
                onChange={onChange}
                label="사유"
                placeholder="사유를 입력하세요."
              />
            </div>
            <_AdditionWrapper>
              <div>
                <_Title>비용</_Title>
                <TextField
                  width={300}
                  placeholder="비용을 입력하세요"
                  value={prepare.cost}
                  name="cost"
                  type="number"
                  onChange={onChange}
                />
              </div>
              <div>
                <_Title>수입/지출</_Title>
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
              </div>
            </_AdditionWrapper>
            <_ButtonWrapper>
              <Button color="main02" onClick={onClick}>
                확인
              </Button>
              <_RegularWrapper>
                <TextField
                  width={300}
                  value={!prepare.regular ? '' : prepare.regular}
                  onChange={onChange}
                  name="regular"
                  placeholder="규칙적인 주 (안하고 싶을 시 0)"
                />
              </_RegularWrapper>
            </_ButtonWrapper>
          </_WriteWrapper>
        </_Article>
        <_Nav>
          <_WritePaper>
            <_ItemWrapper>
              <div>
                <_InnerWrapper>
                  <_Image src={radio === '수입' ? Plus : Minus} alt="type" />
                  <_PreviewTitle radio={radio}>{prepare.title}</_PreviewTitle>
                </_InnerWrapper>
              </div>
              <_ReasonWrapper>
                <_Title>사유</_Title>
                <_Text>
                  {prepare.content.split('\n').map((line: string, index: number) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </_Text>
              </_ReasonWrapper>
              <div>
                <_Title>비용</_Title>
                <_Text>{prepare.cost.toString().trim()}원</_Text>
              </div>
            </_ItemWrapper>
          </_WritePaper>
        </_Nav>
      </_Section>
    </_Wrapper>
  );
};

export default WritePage;

const _Wrapper = styled.div`
  width: 100vw;
  height: 93vh;
`;

const _Section = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

const _Article = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Nav = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const _WriteWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.body3};
`;

const _AdditionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const _Radio = styled.input`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
  border: max(2px, 0.1em) solid gray;
  transition: border 0.5s ease-in-out;
  cursor: pointer;
  border-radius: 50%;
  :checked {
    border: 4px solid ${({ theme }) => theme.color.main01};
  }
  :disabled {
    opacity: 0.7;
  }
  :focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: max(2px, 0.1em) dotted ${({ theme }) => theme.color.main01};
  }
`;

const _Label = styled.label`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.font.body5};
  cursor: pointer;
`;

const _TypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const _TypeItems = styled.fieldset`
  display: flex;
  margin-right: 10px;
`;

const _WritePaper = styled.div`
  width: 90%;
  min-height: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 10px 5px 5px ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.background};
`;

const _ItemWrapper = styled.div`
  width: 80%;
  height: 100%;
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
`;

const _PreviewTitle = styled(_Title)<{ radio: string }>`
  color: ${props => (props.radio === '수입' ? props.theme.color.focus : props.theme.color.main01)};
`;

const _Text = styled.span`
  width: 100%;
  ${({ theme }) => theme.font.body6};
  color: ${({ theme }) => theme.color.black};
  line-height: 48px;
`;

const _ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const _ReasonWrapper = styled.div`
  min-height: 50%;
`;

const _RegularWrapper = styled.div`
  margin-left: 30px;
`;
