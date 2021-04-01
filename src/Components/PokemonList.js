import React from "react";

export default function PokemonList({ pokemon }) {
  // Define some colours
  var colours = ["red", "orange", "black", "green", "blue", "purple"];

  // Get random color
  var colourIndex = Math.floor(Math.random() * colours.length);

  return (
    <div>
      <ul>
        {pokemon &&
          pokemon.map((poke) => {
            return (
              <li key={poke.name} style={{ color: colours[colourIndex] }}>
                {poke.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
