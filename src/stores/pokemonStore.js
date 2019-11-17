import { observable, action, configure } from "mobx";

configure({ enforceActions: "always" });

export const pokemonListStore = observable(
  {
    isLoading: false,
    count: 0,
    next: null,
    previous: null,
    results: [],
    init() {
      if (this.results.length > 0) {
        return;
      }
      this.isLoading = true;
      fetch("https://pokeapi.co/api/v2/item")
        .then(response => response.json())
        .then(
          action(({ count, next, previous, results }) => {
            this.count = count;
            this.next = next;
            this.previous = previous;
            this.results = results;
            this.isLoading = false;
          })
        );
    },
    nextPage() {
      this.isLoading = true;
      fetch(this.next)
        .then(response => response.json())
        .then(
          action(({ count, next, previous, results }) => {
            this.count = count;
            this.next = next;
            this.previous = previous;
            this.results = results;
            this.isLoading = false;
          })
        );
    },
    prevPage() {
      this.isLoading = true;

      fetch(this.previous)
        .then(response => response.json())
        .then(
          action(({ count, next, previous, results }) => {
            this.count = count;
            this.next = next;
            this.previous = previous;
            this.results = results;
            this.isLoading = false;
          })
        );
    }
  },
  { init: action, nextPage: action, prevPage: action }
);
