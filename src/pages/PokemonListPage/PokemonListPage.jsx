import React, { useEffect, useCallback } from "react";
import Url from "url-parse";
import { Link } from "react-router-dom";
import {observer } from "mobx-react-lite";
import  { pokemonListStore } from "../../stores/pokemonStore";

export const PokemonListPage= observer(()=> {

  const {isLoading, count, next, previous, results} = pokemonListStore;

  useEffect(() => {
    pokemonListStore.init();
  }, []);

  const nextCallback = useCallback(() => {
    pokemonListStore.nextPage();
  }, []);

  const prevCallback = useCallback(() => {
    pokemonListStore.prevPage();
  }, []);

  return (
    <div>
      {isLoading ? <span>loading...</span> : null}
      <h1>PokemonListPage</h1>
      <p>Всего:{count}</p>
      {previous ? (
        <button onClick={prevCallback} disabled={isLoading}>previous</button>
      ) : null}
      {next ? <button onClick={nextCallback} disabled={isLoading}>next</button> : null}
      <ul>
        {results.map(({ url, name }) => {
          const { pathname } = new Url(url);
          const pathSplit = pathname.split("/");
          const pokemonId = pathSplit[pathSplit.length - 2];

          return (
            <li key={url}>
              <Link to={`/pokemonPage/${pokemonId}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
})
