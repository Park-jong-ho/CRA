import React, { useEffect, useState } from "react";

const EffectTest = () => {
    const [ count ] = useState( 0 )
  console.log("1. Effect test 컴포넌트 렌더링....");
  const [number, setNumber] = useState(10);

  const callAPI = async () => {
    //1. API 호출
    console.log("2. API 호출합니다");

    //2.상태값 변경

    //3.기타 등등
  };

  const onIncrease = () => {
    setNumber((prev) => prev + 1);
  };

  const onDecrease = () => {
    setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("3. useEffect 호출");
    callAPI();
  }, [count]);

  return (
    <div>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>+1</button>
      </div>
    </div>
  );
};

export default EffectTest;
