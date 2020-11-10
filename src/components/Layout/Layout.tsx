import React, { FC } from 'react';
import cn from 'classnames';
import s from './Layout.module.scss';

interface LayoutProps {
  className?: string;
}

export const Layout: FC<LayoutProps> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);
