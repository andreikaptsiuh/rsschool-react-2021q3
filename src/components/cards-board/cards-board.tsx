import React from 'react';
import { Card } from './card';
import { cards } from '../../shared/cards';

export const CardsBoard: React.FC = () => (
  <div className="cards-board">
    {cards.map((item) => (
      <Card card={item} key={item.id} />
    ))}
  </div>
);
