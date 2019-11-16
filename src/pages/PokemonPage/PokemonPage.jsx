import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PokemonPage() {
  const { id } = useParams();
  const [isLoad, setLoad] = useState(false);
  const [pokemonName, setPokemonName] = useState(null);

  useEffect(() => {
    setLoad(true);

    fetch(`https://pokeapi.co/api/v2/item/${id}`)
      .then(response => response.json())
      .then(({name}) => {

        setPokemonName(name);
        setLoad(false);
      });
  }, []);

  return (
    <div>
        {isLoad ? <span>loading...</span> : null}
      <p>PokemonPage</p>
      <h3>ID: {id}</h3>
      <span>name: {pokemonName}</span>
    </div>
  );
}
