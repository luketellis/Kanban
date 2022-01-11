import React from "react";
import "./card.css";
import { ICard } from "../../interfaces/ICard";

interface Props {
  card: ICard;
}

function Card({ card }: Props) {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <h4>{card.description}</h4>
      <h4>{card.id}</h4>
    </div>
  );
}

export default Card;
