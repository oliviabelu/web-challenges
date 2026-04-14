import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "banana", id: 1, color: "yellow" },
    { name: "apple", id: 2, color: "red" },
    { name: "lemon", id: 3, color: "yellow" },
    { name: "cerry", id: 4, color: "red" },
    { name: "ananas", id: 5, color: "yellow" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}

// fruits.map((fruit) => {return "blablabla"})

// fruits.map((fruit) => ("blabla"))
