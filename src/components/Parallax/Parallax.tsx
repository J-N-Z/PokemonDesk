import React, { FC, useState, useEffect } from 'react';
import s from './Parallax.module.scss';

import SmallPokeballPng from './assets/PokeBall1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudPng from './assets/Cloud.png';
import CloudBigPng from './assets/CloudBig.png';
import PikachuPng from './assets/Pikachu.png';

export const Parallax: FC = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setScreenX(e.screenX);
      setScreenY(e.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.addEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  console.log('screenX, screenY', screenX, screenY);

  return (
    <div className={s.root}>
      <div className={s.smallPokeBall}>
        <img
          src={SmallPokeballPng}
          alt="small pokeball"
          style={{ transform: `translate(${screenX * 0.05}px, ${screenY * 0.05}px)` }}
        />
      </div>
      <div className={s.pokeBall}>
        <img
          src={PokeBallPng}
          alt="pokeball"
          style={{ transform: `translate(${screenX * 0.04}px, ${screenY * 0.04}px)` }}
        />
      </div>
      <div className={s.cloud}>
        <img src={CloudPng} alt="cloud" style={{ transform: `translate(${screenX * 0.03}px, ${screenY * 0.03}px)` }} />
      </div>
      <div className={s.cloudBig}>
        <img
          src={CloudBigPng}
          alt="cloud big"
          style={{ transform: `translate(${screenX * 0.02}px, ${screenY * 0.02}px)` }}
        />
      </div>
      <div className={s.pikachu}>
        <img
          src={PikachuPng}
          alt="pikachu"
          style={{ transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)` }}
        />
      </div>
    </div>
  );
};
