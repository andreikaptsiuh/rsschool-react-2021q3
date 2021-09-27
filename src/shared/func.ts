import { APIResponse, ISearch } from './interfaces';

const baseUrl = 'https://newsapi.org/v2/everything?';
const apiKey = 'apiKey=d13c407419f843918a4c7515972496ef';

export const getSearch = async (search: ISearch): Promise<APIResponse> => {
  const url = `
    ${baseUrl}q=${search.search}&sortBy=${search.sort}&pageSize=${search.size}&page=${search.page}&${apiKey}
  `;

  const response = await fetch(url, {
    headers: { Authorization: `X-Api-Key ${apiKey}` },
  });
  const data = await response.json();
  return data;
};

export const getNewsByTitle = async (title: string): Promise<APIResponse> => {
  const url = `
    ${baseUrl}q=${title}&${apiKey}
  `;

  const response = await fetch(url, {
    headers: { Authorization: `X-Api-Key ${apiKey}` },
  });
  const data = await response.json();
  return data;
};
