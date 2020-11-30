import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

describe('hgetUrlWithParamsConfig', () => {
  test('it should take two arguments "getPokemons" and empty object, in output get object with fields pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('it should take two arguments "getPokemons" and { name: "Pikachu" }, in output get object with fields pathname, protocol, host and query with field name equal "Pikachu"', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Pikachu' },
    });
  });

  test('it should take two arguments "getPokemon" and { id: 25 }, in output get object with fields pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons/25',
      query: {},
    });
  });
});
