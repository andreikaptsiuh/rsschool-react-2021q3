export interface ICard {
  id: number;
  title: string;
  author: string;
  description: string;
  url: string;
  source: {
    name: string;
  },
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
