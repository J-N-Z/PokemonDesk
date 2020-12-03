import React, { useEffect, useState } from 'react';
import { PokemonCard } from '../../components/PokemonCard';
import { useData } from '../../hook/getData';
import { useDebounce } from '../../hook/useDebounce';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

import s from './Pokedex.module.scss';

interface IQuery {
  name?: string;
}

export const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [searchValue]);

  useEffect(() => {
    console.log('debounced');
  }, [debouncedValue]);

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: IQuery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  const pokemonCards = data?.pokemons.map((pokemon: PokemonsRequest) => (
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
      <div>{data?.total} Pokemons for you to choose your favorite</div>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchValueChange} />
      </div>
      <div className={s.cards}>{pokemonCards}</div>
    </div>
  );
};
