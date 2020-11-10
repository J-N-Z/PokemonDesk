import React from 'react';
import { PokemonCard } from '../../components/PokemonCard';
import { pokemons } from '../../pokemons';

export const PokedexPage = () => {
  const pokemonCards = pokemons.map((pokemon) => <PokemonCard />);

  return <div>{pokemonCards}</div>;
};
