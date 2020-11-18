import { config } from '../config';

export const getUrlWithParamsConfig = (endpointConfig: string, query) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };

  return url;
};
