import React, { useEffect, useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const [decrease, setDecrease] = useState(100);
  const handleCount = () => {
    setCount((c) => c + 1);
    console.log(count);
  };
  const handleDecrease = () => {
    setDecrease((d) => d - 1);
    console.log(decrease);
  };

  useEffect(() => {
    console.log("hello");
    return () => {
      console.log("stopped");
    };
  }, [decrease]);

  return (
    <>
      <button onClick={handleCount}>add 1</button>
      <div>{count}</div>

      <button onClick={handleDecrease}>decrease by 1</button>
      <div>{decrease}</div>
    </>
  );
}

export default Test;

//useEffect
