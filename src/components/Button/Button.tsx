import React, { FC } from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  fullWidth?: boolean;
  theme?: 'yellow';
  size?: 'small';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, fullWidth, theme, size, onClick }) => {
  const className = cn(
    { [s.root]: true },
    { [s.fullWidth]: fullWidth },
    { [s.themeYellow]: theme },
    { [s.sizeSmall]: size },
  );

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
