import React from 'react';
import cn from 'classnames';
import s from './App.module.scss';

export const App = () => {
  return <div className={cn(s.header, 'color-blue')}>App component 5</div>;
};
