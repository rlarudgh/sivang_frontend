import { useState } from "react";
import Button from "../components/common/button";
import Input from "../components/common/input";

const Test = () => {
  const [state, setState] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const onClick = () => {
    setState(state + 1);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Button onClick={onClick} color="main01">
        {state}
      </Button>
      <Input
        text="아이디"
        placeholder="아이디를 입력해주세요."
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default Test;
