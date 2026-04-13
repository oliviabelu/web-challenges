export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

function Sum({ valueA, valueB }) {
  return <div>{`${valueA} + ${valueB} = ${valueA + valueB}`}</div>;

  //return <div>{valueA} + {valueB} = {valueA + valueB}</div>;
}
