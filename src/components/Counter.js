import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleChangeCounter = (value) => {
    setCounter(counter + value);
  };
  return (
    <div>
      <button onClick={handleChangeCounter(-1)}>-</button>
      {counter}
      <button onClick={handleChangeCounter(1)}>+</button>
    </div>
  );
};

export default Counter;
