import React, { useState, useCallback } from "react";
export function Home() {
  const [count, setCount] = useState(0);
  const clickHandle = useCallback(() => {
    setCount((val) => ++val);
  }, []);
  return (
    <div>
      Home
      <br></br>
      <h1>-{count}-</h1>
      <button onClick={clickHandle}>点我增加</button>
    </div>
  );
}
