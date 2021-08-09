import React from 'react';
import { ICard } from './interfaces';

const cardContext = {
  card: {
    title: '',
    author: '',
    description: '',
    url: '',
  },
  set: function setCard(card: ICard) {
    this.card = card;
  },
};

export const Context = React.createContext(cardContext);
