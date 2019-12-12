import React, { useEffect, useCallback } from "react";
import Url from "url-parse";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { pokemonLocationStore } from "../../stores/pokemonLocationStore";

export const PokemonLocation = observer(() => {
  const { isLoading, count, next, previous, results } = pokemonLocationStore;

  useEffect(() => {
    pokemonLocationStore.init();
  }, []);

  const nextCallback = useCallback(() => {
    pokemonLocationStore.nextPage();
  }, []);

  const prevCallback = useCallback(() => {
    pokemonLocationStore.prevPage();
  }, []);


  return (
    <div>
      {isLoading ? <span>loading...</span> : null}
      <p>PokemonLocation</p>
      <span>Всего:{count}</span>
      {previous ? (
        <button onClick={prevCallback} disabled={isLoading}>
          previous
        </button>
      ) : null}
      {next ? (
        <button onClick={nextCallback} disabled={isLoading}>
          next
        </button>
      ) : null}
      <ul>
      {results.map(({ url, name }) => {
          const { pathname } = new Url(url);
          const pathSplit = pathname.split("/");
          const locationId = pathSplit[pathSplit.length - 2];

          return (
            <li key={url}>
              <Link to={`/pokemonLocationPage/${locationId}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});