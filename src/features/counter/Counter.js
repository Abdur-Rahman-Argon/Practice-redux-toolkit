import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <div>
      {" "}
      <div className="">
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="">{count}</span>
        <button
          className={"btn"}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
