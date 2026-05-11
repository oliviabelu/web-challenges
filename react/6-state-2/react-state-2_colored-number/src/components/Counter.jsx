import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleIncrementCount() {
    setCounter(counter + 1);
  }

  function handleDecrementCount() {
    setCounter(counter - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrementCount}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecrementCount}
        >
          -
        </button>
      </div>
    </div>
  );
}
