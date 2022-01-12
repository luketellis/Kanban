import React from "react";
import "./card.css";
import { ICard } from "../../interfaces/ICard";

interface Props {
  card: ICard;
  removeCard(id: number): void;
}

function Card({ card, removeCard }: Props) {
  const deleteCard = () => {
    removeCard(card.id);
  };

  return (
    <div className="card grow">
      <span className="default-cursor">
        <strong>{card.id}</strong>
      </span>
      <span className="exit-cross default-cursor">
        <strong onClick={deleteCard}>X</strong>
      </span>
      <hr />
      <h3 className="text-cursor">{card.title}</h3>
      <div className="text-cursor">{card.description}</div>
    </div>
  );
}

export default Card;
