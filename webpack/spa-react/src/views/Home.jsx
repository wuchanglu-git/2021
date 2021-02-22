import React, { useState, useCallback } from "react";
import testPic from "@/statics/images/test.jpg";
import "./Home.less";
export function Home() {
  const [count, setCount] = useState(0);
  const clickHandle = useCallback(() => {
    setCount((val) => ++val);
  }, []);
  return (
    <div className="home">
      Home
      <br></br>
      <h1>--{count}-</h1>
      <button onClick={clickHandle}>点我增加</button>
      <img src={testPic} />
    </div>
  );
}
