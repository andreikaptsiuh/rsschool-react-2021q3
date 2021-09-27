import React from 'react';

export interface ICard {
  id: number;
  title: string;
  author: string;
  description: string;
  url: string;
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

export interface IAction {
  type: string,
  payload: string,
}

export interface IState {
  cards: {
    articles: ICard[],
    totalResults: number,
  }
  isLoad: boolean;
  card: ICard;
}

export interface IAppState {
  app: {
    cards: {
      articles: ICard[],
      totalResults: number,
    }
    isLoad: boolean;
    card: ICard;
  }
}

export interface IParams {
  title: string,
}

export interface IRoutes {
  key: string;
  path: string;
  component: React.ComponentClass | React.FunctionComponent;
}
