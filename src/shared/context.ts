import React from 'react';
import { ICard } from './interfaces';

export const cardContext = {
  title: ' ',
  author: ' ',
  description: ' ',
  url: ' ',

  set(card: ICard): void {
    this.title = card.title;
    this.author = card.author;
    this.description = card.description;
    this.url = card.url;
  },
};

export const Context = React.createContext(cardContext);
