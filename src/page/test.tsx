import { useState } from "react";
import Button from "../components/common/button";
import Input from "../components/common/input";
import Header from "../components/common/header/index";

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
      <Header />
    </>
  );
};

export default Test;
