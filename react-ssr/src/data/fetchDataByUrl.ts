/* eslint-disable no-unused-vars */
import { match, matchPath } from 'react-router';
import { ROUTES } from '../shared/routes';

const DATA_DICTIONARY: Record<string, (route: match) => Promise<any>> = {
  user(route) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          currentUser: {
            id: 'data-id-1',
            name: 'Anton for RS',
          },
        });
      }, 50);
    });
  },
};

export function fetchDataByUrl(url: string): Promise<any> {
  let route: match;

  const routeConfig = ROUTES.find(({ path }) => {
    const matchedRoute = matchPath(url, path);

    if (matchedRoute) {
      route = matchedRoute;
      return true;
    }

    return false;
  });

  if (route && DATA_DICTIONARY[routeConfig.key]) {
    return DATA_DICTIONARY[routeConfig.key](route);
  }

  return Promise.resolve({});
}
