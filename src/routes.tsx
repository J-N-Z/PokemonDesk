import React, { PropsWithChildren } from 'react';
import { HomePage } from './pages/Home';
import { PokedexPage } from './pages/Pokedex';
import { EmptyPage } from './pages/Empty';
import { Pokemon, PokemonProps } from './pages/Pokemon';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}
interface IGeneralMenuItem {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenuItem[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const SECOND_ROUTES: IGeneralMenuItem[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <Pokemon id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IGeneralMenuItem) => {
  acc[item.link] = item.component;
  return acc;
}, {});
