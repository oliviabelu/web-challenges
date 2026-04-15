import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>I am the first button</Button>
      <Button>I am the second button</Button>
      <Button>I am the third button</Button>
      <Button>I am the forth button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
