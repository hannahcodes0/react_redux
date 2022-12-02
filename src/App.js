// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux"; // import 해주세요.

const App = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter.number);
  // 카운터의 숫자를 확인하는 코드. 변경이 되는지 확인할때
  console.log(number); // 숫자 출력
  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        -1
      </button>
    </div>
  );
};

export default App;
