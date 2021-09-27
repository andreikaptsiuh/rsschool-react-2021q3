import React from 'react';
import { Card } from './card';
import { cards } from '../../shared/cards';
import { CardInterface } from '../../shared/interfaces';

export const CardsBoard: React.FC = () => (
  <div className="cards-board">
    {cards.map((item: CardInterface) => (
      <Card card={item} key={item.id} />
    ))}
  </div>

);
