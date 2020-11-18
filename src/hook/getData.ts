import { useState, useEffect } from 'react';
import { req } from '../utils/request';

export const useData = (endpoint: string, query: object) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};
