import { Dispatch, SetStateAction } from 'react';

export interface ICard {
  id: number;
  title: string;
  author: string;
  description: string;
  url: string;
}

export interface IHomePageProps {
  setSearch: Dispatch<SetStateAction<ISearch>>;
  pages: number;
  cards: ICard[];
  isLoading: boolean;
}

export interface IResultBoardProps {
  cards: ICard[];
}

export interface IResultItemProps {
  card: ICard;
}

export interface ISearch {
  search: string,
  sort: string,
  size: number,
  page: number,
}

export interface APIResponse {
  articles: ICard[],
  totalResults: number,
}

export interface IParams {
  title: string,
}
