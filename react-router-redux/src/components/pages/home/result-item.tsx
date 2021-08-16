import React from 'react';
import { Link } from 'react-router-dom';
import { IResultItemProps } from '../../../shared/interfaces';

export const ResultItem: React.FC<IResultItemProps> = ({ card } : IResultItemProps) => (

  <div className="result_item">
    <Link
      to="/details"
      className="result_item__title"

    >
      {card.title}
    </Link>
    <p className="result_item__description">{card.description}</p>
    <h4>{card.author}</h4>
  </div>
);
