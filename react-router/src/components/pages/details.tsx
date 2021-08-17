import React, { useContext } from 'react';
import { Context } from '../../shared/context';

export const Details: React.FC = () => {
  const context = useContext(Context);

  return (
    <div className="container">
      <div className="detail_page">
        <div className="detail_page__content">
          <h2>Details:</h2>

          <div className="detail_item">
            <span className="detail_item__type">Title:</span>
            <h3>{context.title}</h3>
          </div>

          <div className="detail_item">
            <span className="detail_item__type">Description:</span>
            <span>{context.description}</span>
          </div>

          <div className="detail_item">
            <span className="detail_item__type">Author:</span>
            <span>{context.author}</span>
          </div>

          <a href={context.url}>To news</a>
        </div>
      </div>
    </div>

  );
};
