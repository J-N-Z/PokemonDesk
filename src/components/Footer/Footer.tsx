import React, { FC } from 'react';
import s from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div>
        Make with{' '}
        <span role="img" aria-label="heart icon">
          ❤️
        </span>
      </div>
      <div className={s.menu}>Ours Team</div>
    </div>
  );
};
