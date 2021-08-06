import React from 'react';
import { IResultItemProps } from '../../shared/interfaces';

export const ResultItem: React.FC<IResultItemProps> = ({ card } : IResultItemProps) => (
  <div className="result_item">
    <a className="result_item__title" href={card.url}>{card.title}</a>
    <p className="result_item__description">{card.description}</p>
    <h4>{card.author}</h4>
  </div>
);
