import React from 'react';
import { ResultItem } from './result-item';
import { IResultBoardProps } from '../../../shared/interfaces';

export const ResultBoard: React.FC<IResultBoardProps> = ({ cards }: IResultBoardProps) => {
  let key = 0;
  const createKey = (): number => key++;

  const result = cards.length > 0 ? cards.map((item) => (
    <ResultItem card={item} key={createKey()} />
  )) : (<h2>Elements is not found</h2>);

  return (
    <div className="result_board">
      {result}
    </div>
  );
};
