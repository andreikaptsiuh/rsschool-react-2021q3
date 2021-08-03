import React from 'react';
import { User } from '../shared/types';

interface ICardProps {
  user: User;
}

export const Card: React.FC<ICardProps> = ({ user }: ICardProps) => (
  <div className="card">
    <ul className="card_list">
      <li>
        Name:
        {' '}
        {user.name}
      </li>
      <li>
        Surname:
        {' '}
        {user.surname}
      </li>
      <li>
        Birthday:
        {' '}
        {user.birthday}
      </li>
      <li>
        Country:
        {' '}
        {user.country}
      </li>
      <li>
        Notifications:
        {' '}
        {user.notifications ? 'yes' : 'no'}
      </li>
    </ul>
  </div>
);
