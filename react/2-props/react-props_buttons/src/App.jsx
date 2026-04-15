export default function App() {
  function handleClick(text) {
    alert("You've clicked the button " + text);
  }
  return (
    <Button color={"#00ff00"} text="I am a button" onClick={handleClick} />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      type="button"
      style={{ color: color }}
      disabled={disabled}
      onClick={() => onClick(text)} //arrow fkt nutzen, weil wir einen Wert mitgeben; Fkt ohne Parameter, keine Arrow Fkt, sondern nur onClick
    >
      {text}
    </button>
  );
}
