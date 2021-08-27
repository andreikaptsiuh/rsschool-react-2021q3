import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IResultItemProps } from '../../../shared/interfaces';
import { setDetails } from '../../../shared/store/appReducer';

export const ResultItem: React.FC<IResultItemProps> = ({ card } : IResultItemProps) => {
  const dispatch = useDispatch();

  const setDetailsHandler = () => {
    dispatch(setDetails(card));
  };

  return (
    <div className="result_item">
      <Link
        to={`/details/${card.source.name}`}
        className="result_item__title"
        onClick={setDetailsHandler}
      >
        {card.title}
      </Link>
      <p className="result_item__description">{card.description}</p>
      <h4>{card.author}</h4>
    </div>
  );
};
