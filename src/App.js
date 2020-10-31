import React from 'react';
import cn from 'classnames'; 
import './custom.css';
import s from './App.modules.scss';

export const App = () => {
    return (
        <div className={cn(s.header, 'color-blue')}>
            App component 5
        </div>
    )
}