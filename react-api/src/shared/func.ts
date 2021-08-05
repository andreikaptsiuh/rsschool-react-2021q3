import { ICard } from './interfaces';

const baseUrl = 'https://the-one-api.dev/v2';
const apiKey = '8y-UEE6hhSgmZ_N8wd29';

export const getSearch = async (search: string): Promise<ICard[]> => {
  const response = await fetch(`${baseUrl}/${search}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  const data = await response.json();
  return data.docs;
};
