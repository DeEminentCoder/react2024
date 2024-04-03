import React from "react";
import { useState } from "react";

const UstateOne = () => {
  const [myNum, setmyNum] = useState(0);
  const increase = (num) => {
    setmyNum(myNum + num);
    console.log(myNum);
  };

  return (
    <>
      <h1>{myNum}</h1>
      <button onClick={()=>increase(100)} >Increase</button>
    </>
  );
};

export default UstateOne;
