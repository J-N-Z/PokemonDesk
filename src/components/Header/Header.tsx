import React, { FC } from 'react';
import s from './Header.module.scss';
import { Menu } from '../Menu';

const logo = require('../../images/logo.svg').default;

export const Header: FC = () => {
  return (
    <div className={s.header}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.menu}>
        <Menu />
      </div>
    </div>
  );
};
