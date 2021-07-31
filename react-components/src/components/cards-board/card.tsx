import React from 'react';

type CardProps = {
  card: {
    title: string,
    description: string,
    src: string,
    price: number,
  }
}

export const Card: React.FC<CardProps> = (props: CardProps) => (
  <div className="card">
    <img className="card_img" src={props.card.src} alt="img" />
    <h3 className="card_title">{props.card.title}</h3>
    <p className="card_price">
      Price:
      {props.card.price}
    </p>
    <p className="card_description">Click to bye!</p>
  </div>
);
