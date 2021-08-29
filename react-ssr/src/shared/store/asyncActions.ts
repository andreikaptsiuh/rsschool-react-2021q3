import { Dispatch } from 'react';
import { Action } from 'redux';
import { APIResponse, ISearch } from '../interfaces';
import { setDetails, setLoad, setSearch } from './appReducer';

const baseUrl = 'https://newsapi.org/v2/everything?';
const apiKey = 'apiKey=d13c407419f843918a4c7515972496ef';

export const fetchNews = (search: ISearch) => async (dispatch: Dispatch<Action>) => {
  const url = `
    ${baseUrl}q=${search.search}&sortBy=${search.sort}&pageSize=${search.size}&page=${search.page}&${apiKey}
  `;

  const response = await fetch(url, {
    headers: { Authorization: `X-Api-Key ${apiKey}` },
  });
  const data: APIResponse = await response.json();

  dispatch(setSearch(data));

  dispatch(setLoad(false));
};

export const fetchNewsByTitle = (title: string) => async (dispatch: Dispatch<Action>) => {
  const url = `${baseUrl}q=${title}&${apiKey}`;

  const response = await fetch(url, {
    headers: { Authorization: `X-Api-Key ${apiKey}` },
  });
  const data: APIResponse = await response.json();
  const card = data.articles[0];

  await dispatch(setDetails(card));
};
