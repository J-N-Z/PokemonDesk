import React, { FC } from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

interface HeadingProps {
  level: number;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({ level, className, children }) => {
  const tag = `h${level}`;
  return React.createElement(tag, { level, className: cn(s[tag], { className: !!className }) }, children);
};
