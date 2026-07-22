import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((c) => c + 1);
    console.log(count);
  };

  return (
    <>
      <button onClick={handleCount}>add 1</button>
    </>
  );
}

export default Test;

//useEffect
