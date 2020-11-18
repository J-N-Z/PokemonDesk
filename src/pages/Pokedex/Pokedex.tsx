import React, { useState } from 'react';
import { PokemonCard } from '../../components/PokemonCard';
import { useData } from '../../hook/getData';

import s from './Pokedex.module.scss';

export const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  const pokemonCards = data?.pokemons.map((pokemon) => (
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
      <div>
        <input type="text" value={searchValue} onChange={handleSearchValueChange} />
      </div>
      <div className={s.cards}>{pokemonCards}</div>
    </div>
  );
};
