import React, { FC } from 'react';
import s from './Menu.module.scss';

export const Menu: FC = () => {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>Home</li>
        <li className={s.item}>Pokédex</li>
        <li className={s.item}>Legendaries</li>
        <li className={s.item}>Documentation</li>
      </ul>
    </nav>
  );
};
