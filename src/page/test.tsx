import { useState } from "react";

const Test = () => {
  const [state, setState] = useState<number>(0);
  const onClick = () => {
    setState(state + 1);
  };
  return (
    <>
      <span onClick={onClick}>{state}</span>
    </>
  );
};

export default Test;
