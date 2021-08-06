import { ICard } from './interfaces';

const baseUrl = 'https://newsapi.org/v2/everything?';
const apiKey = 'apiKey=d13c407419f843918a4c7515972496ef';

export const getSearch = async (search: string): Promise<ICard[]> => {
  const response = await fetch(`${baseUrl}q=${search}&${apiKey}`, {
    headers: { Authorization: `X-Api-Key ${apiKey}` },
  });
  const data = await response.json();
  return data.articles ? data.articles : [];
};
