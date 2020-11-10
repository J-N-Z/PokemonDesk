import React, { FC } from 'react';
import s from './Heading.module.scss';

interface HeadingProps {
  level: number;
}

export const Heading: FC<HeadingProps> = ({ level, children }) => {
  const tag = `h${level}`;
  return React.createElement(tag, { level, className: s[tag] }, children);
};
