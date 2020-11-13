import React from 'react';
import { useRoutes } from 'hookrouter';
import { NotFoundPage } from './pages/NotFound';
import { routes } from './routes';

export const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};
