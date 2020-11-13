import React, { FC } from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from '../../images/logo.svg';
import { GENERAL_MENU } from '../../routes';

export const Header: FC = () => {
  const path = usePath();

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} className={cn(s.menuLink, { [s.activeLink]: link === path })} href={link}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};
