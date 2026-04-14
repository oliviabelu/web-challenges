import "./styles.css";
import { useState } from "react";

export default function App() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={
            handleDecrease
            //() => {
            //console.log("🤔");
            //}
          }
        >
          -
        </button>
        <button
          type="button"
          onClick={
            handleIncrease
            //() => {
            //console.log("🤔");
            //  }
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
