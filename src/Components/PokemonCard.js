import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./PokemonCard.css";

export default function PokemonCard(pokemon) {
  return (
    <div className="Pokemon">
      <Card style={{ width: "18rem" }}>
        <Card.Header>
          <h1>{pokemon.name}</h1>{" "}
        </Card.Header>
        <ListGroup>
          <ListGroup.Item>weight: {pokemon.weight}</ListGroup.Item>
          <ListGroup.Item className=" text-primary">
            {" "}
            awesome: {pokemon.awesome ? "Yes " : "nope, not really"}
          </ListGroup.Item>
          <ListGroup.Item>
            Terrifying: {pokemon.terrifying ? "Very" : "nah, lovable"}
          </ListGroup.Item>

          <ListGroup.Item>
            {pokemon.abilities.length} abilities:
            {pokemon.abilities ? (
              pokemon.abilities.map((abilite) => <li>{abilite}</li>)
            ) : (
              <p>no abilities</p>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
