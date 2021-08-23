import React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../../../shared/interfaces';
import { ResultItem } from './result-item';

export const ResultBoard: React.FC = () => {
  const cards = useSelector((state: IAppState) => state.app.cards);

  let key = 0;
  const createKey = (): number => key++;

  const result = cards.articles.length > 0 ? cards.articles.map((item) => (
    <ResultItem card={item} key={createKey()} data-testid="result_board" />
  )) : (<h2 data-testid="result_board__title">Elements is not found</h2>);

  return (
    <div className="result_board" data-testid="result_board">
      {result}
    </div>
  );
};
