import React from 'react';
import { Card } from './card';
import { User } from '../shared/types';

interface ICardsBoardProps {
  users: User[];
}

export const CardsBoard: React.FC<ICardsBoardProps> = (props: ICardsBoardProps) => {
  let key = 0;
  const createKey = (): number => key++;
  return (
    <div className="cards_board">
      {props.users.map((item) => (
        <Card user={item} key={createKey()} />
      ))}
    </div>
  );
};
