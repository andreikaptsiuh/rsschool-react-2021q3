import React from 'react';

type CardProps = {
  card: {
    title: string,
    description: string,
  }
}

export const Card: React.FC<CardProps> = (props: CardProps) => (
  <div className="card">
    <h3>{props.card.title}</h3>
    <p>{props.card.description}</p>
  </div>
);
