import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(2);

  function handleAddingPeople() {
    setPeople(people + 1);
  }

  function handleSubtractingPeople() {
    if (people === 1) {
      alert("Reservierung abbrechen?");
      return;
    }
    setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddingPeople={handleAddingPeople}
        onSubtractingPeople={handleSubtractingPeople}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
