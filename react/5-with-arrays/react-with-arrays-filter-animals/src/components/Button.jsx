export function Button({ habitat, selectedHabitat, onClick }) {
  return (
    <button
      type="button"
      className={
        habitat === selectedHabitat ? "button button--active" : "button"
      }
      onClick={() => onClick(habitat)}
    >
      {habitat}
    </button>
  );
}
