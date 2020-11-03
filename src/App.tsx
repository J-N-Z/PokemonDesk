import React from 'react';
import s from './App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <div>content</div>
      <Footer />
    </div>
  );
};
