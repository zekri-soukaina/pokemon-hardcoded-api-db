import React from "react";
import PokemonCard from "../Components/PokemonCard";
import "./Home.css";
export default function Home() {
  const all_pokemon = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: false,
      abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: true,
      terrifying: false,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: true,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: true,
      abilities: ["Intimidate", "Unnerve"],
    },
  ];
  return (
    <div className="row">
      {all_pokemon.map((pokemon) => {
        return (
          <div className="card-poke">
            <PokemonCard
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          </div>
        );
      })}
    </div>
  );
}