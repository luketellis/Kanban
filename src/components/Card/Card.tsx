import React from "react";
import "./card.css";
import { ICard } from "../../interfaces/ICard";

interface Props {
  card: ICard;
}

function Card({ card }: Props) {
  return (
    <div className="card grow">
      <span>
        <strong>{card.id}</strong>
      </span>
      <hr />
      <h3>{card.title}</h3>
      <div>{card.description}</div>
    </div>
  );
}

export default Card;
