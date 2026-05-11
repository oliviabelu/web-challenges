import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${id}`,
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [id]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          const prevId = id - 20;

          if (prevId <= 0) {
            setId(0);
            return;
          }

          setId(prevId);
        }}
        style={{ visibility: id === 0 ? "hidden" : "visible" }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setId(id + 20);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
