import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../shared/interfaces';

export const Details: React.FC = () => {
  const card = useSelector((state: IAppState) => state.app.card);

  return (
    <div className="container">
      <div className="detail_page">
        <div className="detail_page__content">
          <h2>Details:</h2>

          <div className="detail_item">
            <span className="detail_item__type">Title:</span>
            <h3>{card.title}</h3>
          </div>

          <div className="detail_item">
            <span className="detail_item__type">Description:</span>
            <span>{card.description}</span>
          </div>

          <div className="detail_item">
            <span className="detail_item__type">Author:</span>
            <span>{card.author}</span>
          </div>

          <a href={card.url}>To news</a>
        </div>
      </div>
    </div>
  );
};
