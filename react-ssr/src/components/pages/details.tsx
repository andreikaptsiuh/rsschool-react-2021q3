import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IAppState, IParams } from '../../shared/interfaces';
import { fetchNewsByTitle } from '../../shared/store/asyncActions';

export const Details: React.FC = () => {
  const dispatch = useDispatch();

  const params: IParams = useParams();
  dispatch(fetchNewsByTitle(params.title));

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
