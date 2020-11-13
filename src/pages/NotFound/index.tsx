import { navigate } from 'hookrouter';
import React from 'react';
import { Button } from '../../components/Button';

export const NotFoundPage = () => {
  return (
    <div>
      <div>404</div>
      <Button onClick={() => navigate('/')}>Return</Button>
    </div>
  );
};
