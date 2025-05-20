"use client";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2 className="text-7xl">Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </>
  );
}
