import "./Card.css";

export default function Card({ name, color }) {
  console.log(name);
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {name}
    </p>
  );
}
