import React, { FC } from 'react';
import { Heading } from '../Heading';
import s from './PokemonCard.module.scss';

enum Types {
  'water',
  'fire',
  'grass',
}

interface PokemonCardProps {
  pokemon: {
    name: string;
    img: string;
    stats: {
      attack: number;
      defense: number;
    };
    types: string[];
  };
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon: { name, img, stats, types } }) => {
  const mainType = types.find((type) => {
    return Types[type];
  });

  console.log('mainType', mainType);

  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level={5} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
