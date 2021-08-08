export interface ICard {
  id: number;
  title: string;
  author: string;
  description: string;
  url: string;
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
}
