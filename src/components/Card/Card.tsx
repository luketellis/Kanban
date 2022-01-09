import React from "react";
import "./card.css";
import { CardInterface } from "../../interfaces/Card";

interface Props {
  card: CardInterface;
}

function Card({ card }: Props) {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <h4>{card.description}</h4>
    </div>
  );
}

export default Card;
