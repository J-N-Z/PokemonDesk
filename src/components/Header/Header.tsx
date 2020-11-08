import React, { FC } from 'react';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from '../../images/logo.svg';

interface IMenuItem {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenuItem[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

export const Header: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, value, link }) => (
            <a key={id} className={s.menuLink} href={link}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
