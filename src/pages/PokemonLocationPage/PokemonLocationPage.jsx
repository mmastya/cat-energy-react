import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function PokemonLocationPage() {
  const { id } = useParams();
  const [isLoad, setIsLoad] = useState(false);
  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    setIsLoad(true);

    fetch(`https://pokeapi.co/api/v2/location/${id}`)
      .then(response => response.json())
      .then(({ name }) => {
        setLocationName(name);
        setIsLoad(false);
      });
  }, []);

  return (
    <div>
      {isLoad ? <span>loading...</span> : null}
      <h1>PokemonLocationPage</h1>
      <h2>ID: {id}</h2>
      <h3>Location name: {locationName} </h3>
    </div>
  );
}
