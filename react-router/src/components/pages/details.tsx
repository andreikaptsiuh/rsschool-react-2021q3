import React, { useContext } from 'react';
import { Context } from '../../shared/context';

export const Details: React.FC = () => {
  const context = useContext(Context);
  return (
    <div>
      <h2>Details page</h2>
      <p>{context.card.author}</p>
    </div>

  );
};
