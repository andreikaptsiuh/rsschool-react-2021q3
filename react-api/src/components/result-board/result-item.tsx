import React from 'react';
import { IResultItemProps } from '../../shared/interfaces';

export const ResultItem: React.FC<IResultItemProps> = ({ card } : IResultItemProps) => (
  <div className="result_item">
    <p>{card.name}</p>
  </div>
);
