import React, { FC } from 'react';
import { Header } from '../../components/Header';

interface EmptyPageProps {
  title?: string;
}

export const EmptyPage: FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>Empty page {title}</div>
    </div>
  );
};
