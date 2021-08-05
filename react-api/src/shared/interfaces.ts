export interface ICard {
  id: number;
  name: string;
}

export interface IResultBoardProps {
  cards: ICard[];
}

export interface IResultItemProps {
  card: ICard;
}
