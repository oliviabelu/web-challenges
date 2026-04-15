import { useState } from "react";
import "./styles.css";

export default function App() {
  //let isActive = false;
  //let buttonText = "Activate";
  const [isActive, setIsActive] = useState(false);
  //const [toggleButtonText, setToggleButtonText] = useState("Activate");

  function handleClick() {
    //isActive = !isActive;
    // Check that the value changes correctly.
    console.log(isActive);
    setIsActive(!isActive);
    console.log(isActive);
    //setToggleButtonText(isActive ? "Deactivate" : "Activate");
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {
          isActive ? "Deactivate" : "Activate"
          //toggleButtonText
        }
      </button>
    </main>
  );
}
