import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';
import { Button } from '../../components/Button';

export const NotFoundPage = () => {
  return (
    <div>
      <div>404</div>
      <Button onClick={() => navigate(LinkEnum.HOME)}>Return</Button>
    </div>
  );
};
