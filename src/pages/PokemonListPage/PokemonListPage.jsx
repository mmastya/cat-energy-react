import React, { useEffect, useState, useCallback } from "react";
import Url from "url-parse";
import { Link } from "react-router-dom";

export function PokemonListPage() {
  const [isLoad, setLoad] = useState(false);
  const [list, setList] = useState([]);
  const [allItems, setAllItems] = useState(0);
  const [linkForNextList, setNext] = useState(null);
  const [linkForPreviousList, setPrevious] = useState(null);

  useEffect(() => {
    setLoad(true);

    fetch("https://pokeapi.co/api/v2/item")
      .then(response => response.json())
      .then(({ count, next, previous, results }) => {
        setAllItems(count);
        setNext(next);
        setPrevious(previous);
        setList(results);
        setLoad(false);
      });
  }, []);

  const nextCallback = useCallback(() => {
    setLoad(true);

    fetch(linkForNextList)
      .then(response => response.json())
      .then(({ count, next, previous, results }) => {
        setAllItems(count);
        setNext(next);
        setPrevious(previous);
        setList(results);
        setLoad(false);
      });
  }, [linkForNextList]);

  const prevCallback = useCallback(() => {
    setLoad(true);

    fetch(linkForPreviousList)
      .then(response => response.json())
      .then(({ count, next, previous, results }) => {
        setAllItems(count);
        setNext(next);
        setPrevious(previous);
        setList(results);
        setLoad(false);
      });
  }, [linkForPreviousList]);

  return (
    <div>
      {isLoad ? <span>loading...</span> : null}
      <h1>PokemonListPage</h1>
      <p>Всего:{allItems}</p>
      {linkForPreviousList ? (
        <button onClick={prevCallback} disabled={isLoad}>previous</button>
      ) : null}
      {linkForNextList ? <button onClick={nextCallback} disabled={isLoad}>next</button> : null}
      <ul>
        {list.map(({ url, name }) => {
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
  );
}
