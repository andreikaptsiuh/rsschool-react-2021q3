import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../shared/context';
import { IResultItemProps } from '../../../shared/interfaces';

export const ResultItem: React.FC<IResultItemProps> = ({ card } : IResultItemProps) => {
  const context = useContext(Context);

  const contextHandler = () => {
    context.set(card);
  };

  return (
    <div className="result_item">
      <Link
        to={`/details/${card.title}`}
        className="result_item__title"
        onClick={contextHandler}
      >
        {card.title}
      </Link>
      <p className="result_item__description">{card.description}</p>
      <h4>{card.author}</h4>
    </div>
  );
};
