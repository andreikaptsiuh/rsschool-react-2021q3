import React from 'react';
import { User } from '../shared/types';

interface ICardProps {
  user: User;
}

export const Card: React.FC<ICardProps> = ({ user }: ICardProps) => (
  <div className="card">
    <p>{user.name}</p>
  </div>
);
