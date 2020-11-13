import React, { FC } from 'react';

interface EmptyPageProps {
  title?: string;
}

export const EmptyPage: FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>Empty page {title}</div>
    </div>
  );
};
