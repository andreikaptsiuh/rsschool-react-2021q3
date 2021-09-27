import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getNewsByTitle } from '../../shared/func';
import { ICard, IParams } from '../../shared/interfaces';

export const Details: React.FC = () => {
  const params: IParams = useParams();
  const location = useLocation();

  const [card, setCard] = useState<ICard>({
    id: 0,
    title: '',
    author: '',
    description: '',
    url: '',
  });

  useEffect(() => {
    async function getCard() {
      const res = await getNewsByTitle(params.title);
      setCard(res.articles[0]);
    }
    getCard();
  }, [location.pathname]);

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
