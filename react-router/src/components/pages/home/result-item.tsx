import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../shared/context';
import { IResultItemProps } from '../../../shared/interfaces';

export const ResultItem: React.FC<IResultItemProps> = ({ card } : IResultItemProps) => (
  <Context.Consumer>
    {({ set }) => (
      <div className="result_item">
        <Link
          to="/details"
          className="result_item__title"
          onChange={() => set(card)}
        >
          {card.title}
        </Link>
        <p className="result_item__description">{card.description}</p>
        <h4>{card.author}</h4>
      </div>
    )}
  </Context.Consumer>
);
