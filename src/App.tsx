import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import s from './App.module.scss';
import { HomePage } from './pages/Home';
import { PokedexPage } from './pages/Pokedex';

export const App = () => {
  return (
    <div className={s.app}>
      <BrowserRouter>
        <Route path="/home" component={HomePage} />
        <Route path="/pokedex" component={PokedexPage} />
      </BrowserRouter>
    </div>
  );
};
