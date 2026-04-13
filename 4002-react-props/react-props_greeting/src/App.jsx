export default function App() {
  return <Greeting name="Anna" />;
}

function Greeting({ name }) {
  return <div>{`Hello ${name === "Feline" ? "Coach" : name}!`}</div>;

  // return <article>
  //   <p>Hello {name ==="Feline" ? "Coach" : name}!</p>
  // </article>
}
