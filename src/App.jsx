import { useState, useEffect } from "react";

import { NavBar } from "./components/NavBar";
import { Pokemon } from "./components/Pokemon";
import { Button } from "./components/Button";

import "./styles/global.css";

export function App() {
  const [allPokemon, setAllPokemon] = useState([]); 
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20"
  );

  const fetchPokemon = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setAllPokemon((current) => [...current, data]);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
 
  return (
    <div className="bg-white font-sans">
      <NavBar />
      <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
        {allPokemon.map((pokemon, index) => (
          <Pokemon
            key={index}
            id={pokemon.id}
            img={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
          />
        ))}
      </div>
      <div className="flex justify-center m-10">
        <Button run={fetchPokemon} children="Carregar mais" />
      </div>
    </div>
  );
}
