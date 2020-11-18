import React, { useState, useEffect } from 'react';
import { PokemonCard } from '../../components/PokemonCard';
import s from './Pokedex.module.scss';

const usePokemons = () => {
  const [data, setData] = useState({ pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result = await response.json();
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  const pokemonCards = data.pokemons.map((pokemon) => (
    <div className={s.card}>
      <PokemonCard key={pokemon.id} pokemon={pokemon} />
    </div>
  ));

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>something went wrong...</div>;
  }

  return (
    <div>
      <div>{data.total} Pokemons for you to choose your favorite</div>
      <div className={s.cards}>{pokemonCards}</div>
    </div>
  );
};
