import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  jumpAhead,
  jumpBehind,
} from "../features/counter";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [jump, setJump] = useState(1);
  const handleJump = (event) => {
    const value = parseInt(event.target.value);
    setJump(value);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <input type="number" value={jump} onChange={handleJump} />
        <button onClick={() => dispatch(jumpAhead(jump))}>
          Jump Ahead {jump}
        </button>
        <button onClick={() => dispatch(jumpBehind(jump))}>
          Jump Behind {jump}
        </button>
      </div>
    </div>
  );
}

export default Counter;
