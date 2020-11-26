import React, { FC } from 'react';

export interface PokemonProps {
  id: string | number;
}

export const Pokemon: FC<PokemonProps> = ({ id }) => {
  return (
    <div>
      <div> This is pokemon id equal {id}</div>
    </div>
  );
};
