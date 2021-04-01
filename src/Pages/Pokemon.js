import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../Components/PokemonList";
import Pages from "../Components/Pages";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results);
      });

    return () => cancel();
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div style={{ marginLeft: "50px", marginTop: "30px" }}>
      <h1>Our poke </h1>
      <PokemonList pokemon={pokemon} />
      <Pages
        goToPrevPage={goToPrevPage ? goToPrevPage : null}
        goToNextPage={goToNextPage ? goToNextPage : null}
      />
    </div>
  );
}
